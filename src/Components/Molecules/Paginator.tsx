import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useHistory, useLocation } from "react-router";

import "./Paginator.scss";
import useGetParams from "../../Hooks/useGetParams";
import useInfiniteQueue from "../../Hooks/useInfiniteQueue";
import { updateUrlWithGetParams } from "../../Services/HelperService";
import Tooltip from "../Atoms/Tooltip";


interface Props {
  items: any[];
  pageItems: any[];
}

const Paginator: React.FC<Props> = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const getParams = useGetParams();

  const pageKey = "page";
  const pageSizeKey = "pageSize";
  const pageSize = parseInt(getParams.get(pageSizeKey) ?? "6");
  const pagesNum = Math.ceil(props.items.length / pageSize);
  const disablePaginationKey = "disablePagination";
  const disablePagination =
    !!getParams.get(disablePaginationKey) ||
    props.items.length === props.pageItems.length;

  const infiniteQueue = useInfiniteQueue(pagesNum);

  const switchesToShow = 3;

  const handleSwitchPage = (direction: "left" | "right") => {
    switch (direction) {
      case "left":
        infiniteQueue.moveLeft();
        break;
      case "right":
        infiniteQueue.moveRight();
        break;
      default:
        throw new Error("Incorrect direction param was passed");
    }

    const nextPage = infiniteQueue.firstElement.toString();
    getParams.set(pageKey, nextPage);
    updateUrlWithGetParams(history, pathname, getParams);
  };

  const renderPageSwitches = () =>
    Array.from(Array(switchesToShow)).map((_, index) => (
      <div
        key={index}
        className={`paginator__page-switch ${
          switchesToShow / 2 - 0.5 === index ? "active" : "inactive"
        }`}
      ></div>
    ));

  return !disablePagination ? (
    <div className="paginator">
      <Tooltip content="Previous" position="left">
        <BiLeftArrow
          className="paginator__control"
          onClick={() => handleSwitchPage("right")}
        />
      </Tooltip>
      <div className="paginator__switches-container">
        {renderPageSwitches()}
      </div>
      <Tooltip content="Next" position="right">
        <BiRightArrow
          className="paginator__control"
          onClick={() => handleSwitchPage("left")}
        />
      </Tooltip>
    </div>
  ) : (
    <></>
  );
};

export default Paginator;
