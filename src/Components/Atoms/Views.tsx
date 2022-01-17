import React from "react";
import { BsEyeFill } from "react-icons/bs";

import "./Views.scss";

interface Props {
  views: number;
}

const Views: React.FC<Props> = (props) => {
  return (
    <div className="views">
      <BsEyeFill className="views__icon" />
      <span className="views__count">
        {props.views} view{props.views > 1 ? "s" : ""}
      </span>
    </div>
  );
};

export default Views;
