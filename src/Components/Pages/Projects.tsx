import React from "react";
import { Helmet } from "react-helmet";

import "./Projects.scss";
import ProjectsNav from "../Organisms/ProjectsNav";
import ProjectsGrid from "../Organisms/ProjectsGrid";
import Paginator from "../Molecules/Paginator";
import useProjects from "../../Hooks/useProjects";
import LoadingTemplate from "../Templates/LoadingTemplate";
import { getAbout } from "../../Services/DataService";

/**
 * Page with a list of projects, navigation bar
 * with ability to select sorting and filtering options
 * and a pagination menu
 *
 * @return {*}  {JSX.Element}
 */
const Projects: React.FC = (): JSX.Element => {
  const { nickname } = getAbout();

  const { projects, pageProjects, isLoading } = useProjects({
    loadingDelay: 1000,
  });

  return (
    <>
      <Helmet>
        <title>Projects | {nickname}</title>
        <meta
          name="description"
          content="A list of almost all the projects and case studies I've done"
        />
      </Helmet>

      <div className="projects">
        <ProjectsNav />

        <div className="projects__body">
          <LoadingTemplate isLoading={isLoading}>
            <ProjectsGrid projects={pageProjects} />
          </LoadingTemplate>

          <Paginator items={projects} pageItems={pageProjects} />
        </div>
      </div>
    </>
  );
};

export default Projects;
