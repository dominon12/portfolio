import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./ProjectsGrid.scss";
import ProjectCard from "../Molecules/ProjectCard";
import { Project } from "../../Types/ApiTypes";
import { updateUrlWithGetParams } from "../../Services/HelperService";
import useGetParams from "../../Hooks/useGetParams";
import { projectIdKey } from "../../Services/GetParamKeys";

interface Props {
  projects?: Project[];
}

/**
 * Renders a grid of projects
 *
 * @return {*}  {JSX.Element}
 */
const ProjectsGrid: React.FC<Props> = (props): JSX.Element => {
  const history = useHistory();
  const getParams = useGetParams();
  const { pathname } = useLocation();

  /**
   * Sets 'projectId' search param to clicked
   * project card's id.
   *
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e
   */
  const expandProjectCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const offsetParent = (e.target as HTMLDivElement).offsetParent;
    const isProjectCard = offsetParent?.classList.contains("project-card");

    if (offsetParent && isProjectCard) {
      const id = offsetParent.id;
      getParams.set(projectIdKey, id.toString());
      updateUrlWithGetParams(history, pathname, getParams);
    }
  };

  return (
    <div className="projects-grid" onClick={expandProjectCard}>
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
