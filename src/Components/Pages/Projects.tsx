import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./Projects.scss";
import ProjectsNav from "../Organisms/ProjectsNav";
import ProjectsGrid from "../Organisms/ProjectsGrid";
import Paginator from "../Molecules/Paginator";
import { RootState } from "../../Redux/Types";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";

/**
 * Page with a list of projects, navigation bar
 * with ability to select sorting and filtering options
 * and a pagination menu
 *
 * @return {*}  {JSX.Element}
 */
const Projects: React.FC = (): JSX.Element => {
  const profile = useSelector((state: RootState) => state.about.data);
  const {
    data: projectsData,
    pending,
    error,
  } = useSelector((state: RootState) => state.projects);

  return (
    <>
      <Helmet>
        <title>Projects | {profile?.nickname ?? ""}</title>
        <meta
          name="description"
          content="A list of almost all the projects and case studies I've done"
        />
      </Helmet>

      <div className="projects">
        <ProjectsNav />

        <div className="projects__body">
          <ApiResponseTemplate
            render={() => <ProjectsGrid projects={projectsData?.results} />}
            pending={pending}
            error={error}
          />

          <Paginator
            itemsCount={projectsData?.count ?? 0}
            pageItemsCount={projectsData?.results?.length ?? 0}
            totalPages={projectsData?.totalPages ?? -1}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
