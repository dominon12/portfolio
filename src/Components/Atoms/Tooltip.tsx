import React, { useState } from "react";

import "./Tooltip.scss";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface Props {
  content: any;
  showDelay?: number;
  position?: TooltipPosition;
  hideOnMobile?: boolean;
}

const Tooltip: React.FC<Props> = (props) => {
  let timeout: any = null;
  const [active, setActive] = useState(false);

  const show = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.showDelay || 100);
  };

  const hide = () => {
    clearTimeout(timeout);
    setActive(false);
  };

  return (
    <div className="tooltip" onMouseEnter={show} onMouseLeave={hide}>
      {props.children}
      {active && (
        <div
          className={`tooltip__tip ${props.position || "top"} ${
            props.hideOnMobile ? "hide-on-mobile" : ""
          }`}
        >
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
