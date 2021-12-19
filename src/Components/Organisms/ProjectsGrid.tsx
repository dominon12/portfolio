import React from "react";

import "./ProjectsGrid.scss";
import ProjectCard from "../Molecules/ProjectCard";
import { Project } from "../../Types/ApiTypes";

interface Props {
  projects?: Project[];
}

/**
 * Renders a grid of projects
 *
 * @return {*}  {JSX.Element}
 */
const ProjectsGrid: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="projects-grid">
      {props.projects &&
        props.projects.map((project: Project) => (
          <ProjectCard
            key={project.pk}
            id={project.pk}
            name={project.name}
            image={project.image}
            shortDescription={project.shortDescription}
            date={new Date(project.date)}
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
