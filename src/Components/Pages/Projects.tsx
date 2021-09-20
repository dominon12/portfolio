import React, { useState } from "react";

import "./Projects.scss";
import Select from "../Molecules/Select";
import Title from "../Atoms/Title";
import ProjectCard from "../Molecules/ProjectCard";
import { getProjects } from "../../Services/DataService";
import { Project, SelectValue } from "../../Types/Types";

const Projects: React.FC = () => {
  const projects: Project[] = getProjects();

  // TODO: make sorting and filtering work
  const [filterBy, setFilterBy] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filterValues: SelectValue[] = [
    {
      id: 1,
      value: "react",
      displayValue: "React",
    },
    {
      id: 1,
      value: "angular",
      displayValue: "Angular",
    },
  ];
  const sortValues: SelectValue[] = [
    {
      id: 1,
      value: "date",
      displayValue: "Date, low to high",
    },
    {
      id: 2,
      value: "-date",
      displayValue: "Date, high to low",
    },
  ];

  return (
    <div className="projects">
      <div className="projects__controls-container">
        <Select
          label="Filter"
          value={filterBy}
          values={filterValues}
          handleChange={setFilterBy}
        />
        <Title className="projects__title">Projects</Title>
        <Select
          label="Sort"
          value={sortBy}
          values={sortValues}
          handleChange={setSortBy}
        />
      </div>
      <div className="projects__wrapper">
        {projects.map((project: Project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            shortDescription={project.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
