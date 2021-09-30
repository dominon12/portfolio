import React from "react";
import Title from "../Atoms/Title";
import { Bookcase } from "../Organisms/Bookcase";

import "./Hobbies.scss";

interface Props {}

const Hobbies: React.FC = (props: Props) => {
  return (
    <div>
      <Title>My library</Title>
      <Bookcase />
    </div>
  );
};

export default Hobbies;
