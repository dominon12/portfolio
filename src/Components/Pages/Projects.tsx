import React, { useState } from "react";
import { Helmet } from "react-helmet";

import ProjectsNav from "../Organisms/ProjectsNav";
import { getProjects } from "../../Services/DataService";
import { IProject } from "../../Types/Types";
import ProjectsGrid from "../Organisms/ProjectsGrid";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>(getProjects());

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
        <ProjectsNav projects={projects} setProjects={setProjects} />
        <ProjectsGrid projects={projects} />
      </div>
    </>
  );
};

export default Projects;
