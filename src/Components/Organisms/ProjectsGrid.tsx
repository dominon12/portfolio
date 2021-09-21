import React from "react";

import "./ProjectsGrid.scss";
import ProjectCard from "../Molecules/ProjectCard";
import { Project } from "../../Types/Types";

interface Props {
  projects: Project[];
}

const ProjectsGrid: React.FC<Props> = (props) => {
  return (
    <div className="projects-grid">
      {props.projects.length ? (
        props.projects.map((project: Project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            shortDescription={project.shortDescription}
            dateStarted={project.dateStarted}
            technologies={project.technologies}
            description={project.description}
            repository={project.repository}
            link={project.link}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProjectsGrid;
