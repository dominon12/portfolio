import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./JumpingArrow.scss";
import { scrollTo } from "../../Services/HelperService";

interface Props {
  className?: string;
}

/**
 * Arrow icon which moves from top
 * to down infinitely.
 *
 * On click, scrolls container a little bit down.
 *
 * @return {*}  {JSX.Element}
 */
const JumpingArrow: React.FC<Props> = ({ className }): JSX.Element => {
  /**
   * Scrolls container a little bit down.
   */
  const scrollABitDown = () => {
    scrollTo({ top: 800, left: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`jumping-arrow hover-highlight ${className ? className : ""}`}
    >
      <IoIosArrowDown
        className="jumping-arrow__icon"
        onClick={scrollABitDown}
      />
    </div>
  );
};

export default JumpingArrow;
