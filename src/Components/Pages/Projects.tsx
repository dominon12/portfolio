import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./Projects.scss";
import ProjectsNav from "../Organisms/ProjectsNav";
import ProjectsGrid from "../Organisms/ProjectsGrid";
import Paginator from "../Molecules/Paginator";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import { selectProfile } from "../../Redux/About/Selectors";
import { selectProjects } from "../../Redux/Projects/Selectors";

/**
 * Page with a list of projects, navigation bar
 * with ability to select sorting and filtering options
 * and a pagination menu
 *
 * @return {*}  {JSX.Element}
 */
const Projects: React.FC = (): JSX.Element => {
  const profile = useSelector(selectProfile);
  const projects = useSelector(selectProjects);

  return (
    <>
      <Helmet>
        <title>Projects | {profile.data?.nickname ?? ""}</title>
        <meta
          name="description"
          content="A list of almost all the projects and case studies I've done"
        />
      </Helmet>

      <div className="projects">
        <ProjectsNav />

        <div className="projects__body">
          <ApiResponseTemplate
            render={() => <ProjectsGrid projects={projects.data?.results} />}
            pending={projects.pending}
            error={projects.error}
          />

          <Paginator
            itemsCount={projects.data?.count ?? 0}
            pageItemsCount={projects.data?.results?.length ?? 0}
            totalPages={projects.data?.totalPages ?? -1}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
