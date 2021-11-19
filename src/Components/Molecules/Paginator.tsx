import React, { useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useHistory, useLocation } from "react-router";

import "./Paginator.scss";
import useGetParams from "../../Hooks/useGetParams";
import useInfiniteQueue from "../../Hooks/useInfiniteQueue";
import { scrollTo, updateUrlWithGetParams } from "../../Services/HelperService";
import Tooltip from "../Atoms/Tooltip";

enum Direction {
  Right = "right",
  Left = "left",
}

interface Props {
  items: any[];
  pageItems: any[];
}

const Paginator: React.FC<Props> = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const getParams = useGetParams();

  // get params keys
  const pageKey = "page";
  const pageSizeKey = "pageSize";
  const disablePaginationKey = "disablePagination";

  const pageSize = parseInt(getParams.get(pageSizeKey) ?? "6");
  const pagesNum = Math.ceil(props.items.length / pageSize);

  const disablePagination =
    !!getParams.get(disablePaginationKey) ||
    props.items.length === props.pageItems.length;

  const infiniteQueue = useInfiniteQueue(pagesNum);

  const switchesContainer = useRef<HTMLDivElement | null>(null);

  const transitionTime = 500;
  const transitionTimeString = `${transitionTime}ms`;

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

  const switchPage = () => {
    const nextPage = infiniteQueue.firstElement.toString();
    getParams.set(pageKey, nextPage);
    updateUrlWithGetParams(history, pathname, getParams);
    setTimeout(() => {
      scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, transitionTime);
  };

  const handleSwitchPage = (direction: Direction) => {
    moveQueue(direction);
    handleAnimation(direction);
    switchPage();
  };

  return !disablePagination ? (
    <div className="paginator">
      <Tooltip content="Previous" position="left">
        <BiLeftArrow
          className="paginator__control"
          onClick={() => handleSwitchPage(Direction.Right)}
        />
      </Tooltip>

      <div ref={switchesContainer} className="paginator__switches-container">
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
  ) : (
    <></>
  );
};

export default Paginator;
