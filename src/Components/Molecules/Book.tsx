import React from "react";

import './Book.scss'

interface Props {
  title: string;
  color: string;
}

export const Book: React.FC<Props> = (props) => {
  return (
    <div className="book" style={{ backgroundColor: props.color }}>
      <div className="book__title">{props.title}</div>
    </div>
  );
};
