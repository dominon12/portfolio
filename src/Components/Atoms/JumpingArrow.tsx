import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./JumpingArrow.scss";
import { scrollTo } from "../../Services/HelperService";

interface Props {
  className?: string;
}

const JumpingArrow: React.FC<Props> = ({ className }) => {
  const scrollABitDown = () => {
    scrollTo({ top: 800, left: 0, behavior: "smooth" });
  };

  return (
    <div className={`jumping-arrow ${className ? className : ""}`}>
      <IoIosArrowDown
        className="jumping-arrow__icon"
        onClick={scrollABitDown}
      />
    </div>
  );
};

export default JumpingArrow;
