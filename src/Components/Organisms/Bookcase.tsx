import React from "react";
import { Book } from "../Molecules/Book";

import "./Bookcase.scss";

interface Props {}

export const Bookcase: React.FC<Props> = (props) => {
  return (
    <div className="bookcase">
      {/* <div className="bookcase__shelf"> */}
      <Book color="red" title="Absalom, Absalom!" />
      <Book color="blue" title="A Time to Kill by John Grisham" />
      <Book color="green" title="The House of Mirth by Edith Wharton" />
      <Book color="pink" title="East of Eden by John Steinbeck" />
      <Book color="orange" title="The Sun Also Rises by Ernest Hemingway" />
      <Book color="brown" title="Vile Bodies by Evelyn Waugh" />
      <Book color="pink" title="A Scanner Darkly by Philip K." />
      {/* </div>
      <div className="bookcase__shelf"></div>
      <div className="bookcase__shelf"></div>
      <div className="bookcase__shelf"></div>
      <div className="bookcase__shelf"></div>
      <div className="bookcase__shelf"></div>
      <div className="bookcase__shelf"></div> */}
    </div>
  );
};
