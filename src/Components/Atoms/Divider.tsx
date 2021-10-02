import React from "react";

import "./Divider.scss";

const Divider: React.FC = (props) => {
  return (
    <div className="divider">
      <div className="divider__title">{props.children}</div>
    </div>
  );
};

export default Divider;
