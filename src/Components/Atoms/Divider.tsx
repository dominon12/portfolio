import React from "react";

import "./Divider.scss";

/**
 * Renders a line to the right and
 * to the left from passed children element.
 *
 * @return {*}  {JSX.Element}
 */
const Divider: React.FC = (props): JSX.Element => {
  return (
    <div className="divider">
      <div className="divider__title">{props.children}</div>
    </div>
  );
};

export default Divider;
