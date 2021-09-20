import React, { useEffect, useState } from "react";

import ProjectsNav from "../Organisms/ProjectsNav";
import { getProjects } from "../../Services/DataService";
import { Project, SelectValue, SelectValuesGroup } from "../../Types/Types";
import ProjectsGrid from "../Organisms/ProjectsGrid";

function getFilterValues(projects: Project[]): SelectValuesGroup[] {
  let technologies = new Set<string>();
  let projectTypes = new Set<string>();

  projects.forEach((project: Project) => {
    // join backend, frontend and devops arrays
    const projectTechnologies: string[] = [
      ...project.technologies.backend,
      ...project.technologies.frontend,
      ...project.technologies.devops,
    ];
    // add technologies
    projectTechnologies.forEach(technologies.add, technologies);
    // add project type
    projectTypes.add(project.type);
  });

  const randomId = () => Math.floor(Math.random() * 1000000);

  // convert string to SelectValuesGroup type
  const technologyValues: SelectValuesGroup = {
    id: randomId(),
    groupName: "Technology",
    values: Array.from(technologies).map((technology) => ({
      id: randomId(),
      value: technology,
      displayValue: technology,
    })),
  };
  const projectTypeValues: SelectValuesGroup = {
    id: randomId(),
    groupName: "Type",
    values: Array.from(projectTypes).map((projectType) => ({
      id: randomId(),
      value: projectType,
      displayValue: projectType,
    })),
  };
  return [technologyValues, projectTypeValues];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(getProjects());

  const [filterBy, setFilterBy] = useState("");
  const [filterValues, setFilterValues] = useState<SelectValuesGroup[]>([]);
  const [sortBy, setSortBy] = useState("");

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
    {
      id: 3,
      value: "implementationTime",
      displayValue: "Implementation time, low to high",
    },
    {
      id: 4,
      value: "-implementationTime",
      displayValue: "Implementation time, high to low",
    },
  ];

  useEffect(() => {
    if (projects.length) {
      setFilterValues(getFilterValues(projects));
    }
  }, [projects]);

  return (
    <div className="projects">
      <ProjectsNav
        filterByValue={filterBy}
        setFilterByValue={setFilterBy}
        filterValues={filterValues}
        sortByValue={sortBy}
        setSortByValue={setSortBy}
        sortValues={sortValues}
      />
      <ProjectsGrid projects={projects} />
    </div>
  );
};

export default Projects;
