import React from "react";

import "./BrickLink.scss";

interface Props {
  href: string;
  className?: string;
  rel?: string;
}

const BrickLink: React.FC<Props> = (props) => {
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
