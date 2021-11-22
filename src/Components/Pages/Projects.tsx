import React from "react";
import { Helmet } from "react-helmet";

import ProjectsNav from "../Organisms/ProjectsNav";
import ProjectsGrid from "../Organisms/ProjectsGrid";
import Paginator from "../Organisms/Paginator";
import useProjects from "../../Hooks/useProjects";

const Projects: React.FC = () => {
  const { projects, pageProjects } = useProjects();

  return (
    <>
      <Helmet>
        <title>Projects | Dominon12</title>
        <meta
          name="description"
          content="A list of almost all the projects and case studies I've done"
        />
      </Helmet>
      <div className="projects">
        <ProjectsNav />
        <div className="projects__grid">
          <ProjectsGrid projects={pageProjects} />
          <Paginator items={projects} pageItems={pageProjects} />
        </div>
      </div>
    </>
  );
};

export default Projects;
