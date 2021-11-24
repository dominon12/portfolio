import React, { useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useHistory, useLocation } from "react-router";

import "./Paginator.scss";
import useGetParams from "../../Hooks/useGetParams";
import useInfiniteQueue from "../../Hooks/useInfiniteQueue";
import { scrollTo, updateUrlWithGetParams } from "../../Services/HelperService";
import Tooltip from "../Atoms/Tooltip";
import Select from "./Select";
import { handleChangeGetParams } from "../../Services/ProjectsService";
import { pageKey, pageSizeKey } from "../../Services/GetParamKeys";

enum Direction {
  Right = "right",
  Left = "left",
}

interface Props {
  items: any[];
  pageItems: any[];
}

/**
 * Renders interface which allows to switch 
 * between pages with beautiful animation 
 * and to select a page size.
 *
 * @return {*}  {JSX.Element}
 */
const Paginator: React.FC<Props> = (props): JSX.Element => {
  const history = useHistory();
  const { pathname } = useLocation();
  const getParams = useGetParams();

  const pageSize = parseInt(getParams.get(pageSizeKey) ?? "6");
  const pagesNum = Math.ceil(props.items.length / pageSize);

  const disablePagination =
    props.items.length === props.pageItems.length || pageSize <= 0;

  const infiniteQueue = useInfiniteQueue(pagesNum);

  const switchesContainer = useRef<HTMLDivElement | null>(null);

  const transitionTime = 500;
  const transitionTimeString = `${transitionTime}ms`;

  /**
   * Changes classNames of passed
   * elements in order to make 
   * animation work
   *
   * @param {HTMLDivElement} left 
   * @param {HTMLDivElement} central
   * @param {HTMLDivElement} right
   * @param {HTMLDivElement} rightDisabled
   */
  const handleMoveLeft = (
    left: HTMLDivElement,
    central: HTMLDivElement,
    right: HTMLDivElement,
    rightDisabled: HTMLDivElement
  ) => {
    left.style.transition = transitionTimeString;
    central.style.transition = transitionTimeString;
    right.style.transition = transitionTimeString;
    rightDisabled.style.transition = transitionTimeString;

    left.classList.remove("left");
    left.classList.add("left-disabled");

    central.classList.remove("central");
    central.classList.add("left");

    right.classList.remove("right");
    right.classList.add("central");

    rightDisabled.classList.remove("right-disabled");
    rightDisabled.classList.add("right");
  };

  /**
   * Recovers default class names
   * of passed elements and sets 
   * transition to 0 in order to 
   * be able to play animation again without 
   * changing elements' order
   *
   * @param {HTMLDivElement} left
   * @param {HTMLDivElement} central
   * @param {HTMLDivElement} right
   * @param {HTMLDivElement} rightDisabled
   */
  const applyDefaultSwitchesStylesLeft = (
    left: HTMLDivElement,
    central: HTMLDivElement,
    right: HTMLDivElement,
    rightDisabled: HTMLDivElement
  ) => {
    left.style.transition = "0s";
    central.style.transition = "0s";
    right.style.transition = "0s";
    rightDisabled.style.transition = "0s";

    left.classList.remove("left-disabled");
    left.classList.add("left");

    central.classList.remove("left");
    central.classList.add("central");

    right.classList.remove("central");
    right.classList.add("right");

    rightDisabled.classList.remove("right");
    rightDisabled.classList.add("right-disabled");
  };

  /**
   * Changes classNames of passed
   * elements in order to make 
   * animation work
   *
   * @param {HTMLDivElement} leftDisabled
   * @param {HTMLDivElement} left
   * @param {HTMLDivElement} central
   * @param {HTMLDivElement} right
   */
  const handleMoveRight = (
    leftDisabled: HTMLDivElement,
    left: HTMLDivElement,
    central: HTMLDivElement,
    right: HTMLDivElement
  ) => {
    leftDisabled.style.transition = transitionTimeString;
    left.style.transition = transitionTimeString;
    central.style.transition = transitionTimeString;
    right.style.transition = transitionTimeString;

    leftDisabled.classList.remove("left-disabled");
    leftDisabled.classList.add("left");

    left.classList.remove("left");
    left.classList.add("central");

    central.classList.remove("central");
    central.classList.add("right");

    right.classList.remove("right");
    right.classList.add("right-disabled");
  };

  /**
   * Recovers default class names
   * of passed elements and sets 
   * transition to 0 in order to 
   * be able to play animation again without 
   * changing elements' order
   *
   * @param {HTMLDivElement} leftDisabled
   * @param {HTMLDivElement} left
   * @param {HTMLDivElement} central
   * @param {HTMLDivElement} right
   */
  const applyDefaultSwitchesStylesRight = (
    leftDisabled: HTMLDivElement,
    left: HTMLDivElement,
    central: HTMLDivElement,
    right: HTMLDivElement
  ) => {
    leftDisabled.style.transition = "0s";
    left.style.transition = "0s";
    central.style.transition = "0s";
    right.style.transition = "0s";

    leftDisabled.classList.remove("right");
    leftDisabled.classList.add("left-disabled");

    left.classList.remove("central");
    left.classList.add("left");
    left.style.removeProperty("left");

    central.classList.remove("right");
    central.classList.add("central");

    right.classList.remove("right-disabled");
    right.classList.add("right");
  };

  /**
   * Animates switches elements
   *
   * @param {Direction} direction
   */
  const handleAnimation = (direction: Direction) => {
    const container = switchesContainer.current;
    if (container) {
      const leftDisabled = container.children[0],
        left = container.children[1],
        central = container.children[2],
        right = container.children[3],
        rightDisabled = container.children[4];

      if (leftDisabled && left && central && right && rightDisabled) {
        switch (direction) {
          case Direction.Left:
            handleMoveLeft(
              left as HTMLDivElement,
              central as HTMLDivElement,
              right as HTMLDivElement,
              rightDisabled as HTMLDivElement
            );
            setTimeout(() => {
              applyDefaultSwitchesStylesLeft(
                left as HTMLDivElement,
                central as HTMLDivElement,
                right as HTMLDivElement,
                rightDisabled as HTMLDivElement
              );
            }, transitionTime);
            break;

          case Direction.Right:
            handleMoveRight(
              leftDisabled as HTMLDivElement,
              left as HTMLDivElement,
              central as HTMLDivElement,
              right as HTMLDivElement
            );
            setTimeout(() => {
              applyDefaultSwitchesStylesRight(
                leftDisabled as HTMLDivElement,
                left as HTMLDivElement,
                central as HTMLDivElement,
                right as HTMLDivElement
              );
            }, transitionTime);
            break;

          default:
            break;
        }
      }
    }
  };

  /**
   * Invokes needed InfiniteQueue methods
   * to be up-to-date with url search param 'page'
   *
   * @param {Direction} direction
   */
  const moveQueue = (direction: Direction) => {
    switch (direction) {
      case Direction.Left:
        infiniteQueue.moveLeft();
        break;
      case Direction.Right:
        infiniteQueue.moveRight();
        break;
      default:
        throw new Error("Incorrect direction param was passed");
    }
  };

  /**
   * Gets next page value and sets it to url 
   * search params, updates url and scrolls to top
   * with 'transitionTime' delay.
   * 
   * Delay is needed to show transition animation 
   * to user
   */
  const switchPage = () => {
    const nextPage = infiniteQueue.firstElement.toString();
    setTimeout(() => {
      getParams.set(pageKey, nextPage);
      updateUrlWithGetParams(history, pathname, getParams);
      scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, transitionTime);
  };

  /**
   * Handles page switching flow
   *
   * @param {Direction} direction
   */
  const handleSwitchPage = (direction: Direction) => {
    moveQueue(direction);
    handleAnimation(direction);
    switchPage();
  };

  return (
    <div className="paginator">
      {!disablePagination && (
        <div className="paginator__controls">
          <Tooltip content="Previous" position="left">
            <BiLeftArrow
              className="paginator__control"
              onClick={() => handleSwitchPage(Direction.Right)}
            />
          </Tooltip>

          <div
            ref={switchesContainer}
            className="paginator__switches-container"
          >
            <div className="paginator__page-switch left-disabled"></div>
            <div className="paginator__page-switch left"></div>
            <div className="paginator__page-switch central"></div>
            <div className="paginator__page-switch right"></div>
            <div className="paginator__page-switch right-disabled"></div>
          </div>

          <Tooltip content="Next" position="right">
            <BiRightArrow
              className="paginator__control"
              onClick={() => handleSwitchPage(Direction.Left)}
            />
          </Tooltip>
        </div>
      )}
      <div className="paginator__page-size-select">
        <Select
          label="Page size"
          value={pageSize}
          values={[
            { id: 1, value: "6", displayValue: "6" },
            { id: 2, value: "12", displayValue: "12" },
            { id: 3, value: "24", displayValue: "24" },
            { id: 4, value: "-1", displayValue: "Show All" },
          ]}
          handleChange={(value: string) =>
            handleChangeGetParams(
              pageSizeKey,
              value,
              getParams,
              pathname,
              history
            )
          }
        />
      </div>
    </div>
  );
};

export default Paginator;
