import React, { useState } from "react";

import "./Tooltip.scss";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface Props {
  content: any;
  showDelay?: number;
  position?: TooltipPosition;
  hideOnMobile?: boolean;
}

/**
 * Wrapper component which show a tooltip
 * with some text on hover.
 *
 * @return {*}  {JSX.Element}
 */
const Tooltip: React.FC<Props> = (props): JSX.Element => {
  let timeout: any = null;
  const [active, setActive] = useState(false);

  /**
   * Sets 'active' state variable to true
   * after some delay.
   * 
   * If no 'showDelay' prop was provided,
   * delay will be set to 100ms.
   */
  const show = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.showDelay || 100);
  };

  /**
   * Clears timeout and sets
   * 'active' state variable to false.
   */
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
