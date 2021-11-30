import React from "react";

import "./BrickLink.scss";

interface Props {
  href: string;
  className?: string;
  rel?: string;
}

/**
 * Link which looks like a brick.
 *
 * @return {*}  {JSX.Element}
 */
const BrickLink: React.FC<Props> = (props): JSX.Element => {
  return (
    <a
      href={props.href}
      className={`brick-link hover-animation ${
        props.className && props.className
      }`}
      rel={props.rel}
    >
      {props.children}
    </a>
  );
};

export default BrickLink;
