import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./JumpingArrow.scss";
import { scrollTo } from "../../Services/HelperService";

const JumpingArrow: React.FC = () => {
  const scrollABitDown = () => {
    scrollTo({ top: 200, left: 0, behavior: "smooth" });
  };

  return (
    <div className="jumping-arrow">
      <IoIosArrowDown
        className="jumping-arrow__icon"
        onClick={scrollABitDown}
      />
    </div>
  );
};

export default JumpingArrow;
