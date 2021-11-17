import React from "react";

import "./ProjectsNav.scss";
import Title from "../Atoms/Title";
import Select from "../Molecules/Select";
import { ISelectValue, ISelectValuesGroup } from "../../Types/Types";

interface Props {
  // filter
  filterByValue: string;
  setFilterByValue: React.Dispatch<React.SetStateAction<string>>;
  filterValues: ISelectValuesGroup[];
  // sort
  sortByValue: string;
  setSortByValue: React.Dispatch<React.SetStateAction<string>>;
  sortValues: ISelectValue[];
}

const ProjectsNav: React.FC<Props> = (props) => {
  return (
    <nav className="projects-nav">
      <Select
        label="Filter"
        value={props.filterByValue}
        values={props.filterValues}
        handleChange={props.setFilterByValue}
      />
      <Title className="projects-nav__title">Projects</Title>
      <Select
        label="Sort"
        value={props.sortByValue}
        values={props.sortValues}
        handleChange={props.setSortByValue}
      />
    </nav>
  );
};

export default ProjectsNav;
