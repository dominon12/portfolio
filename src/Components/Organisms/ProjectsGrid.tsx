import React from "react";

import "./ProjectsGrid.scss";
import ProjectCard from "../Molecules/ProjectCard";
import { IProject } from "../../Types/PortfolioDataTypes";

interface Props {
  projects: IProject[];
}

/**
 * Renders a grid of projects
 *
 * @return {*}  {JSX.Element}
 */
const ProjectsGrid: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="projects-grid">
      {props.projects.map((project: IProject) => (
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
      ))}
    </div>
  );
};

export default ProjectsGrid;
