import React, { useEffect, useState } from "react";

import ProjectsNav from "../Organisms/ProjectsNav";
import { getProjects } from "../../Services/DataService";
import { IProject, ISelectValue, ISelectValuesGroup } from "../../Types/Types";
import ProjectsGrid from "../Organisms/ProjectsGrid";

function getFilterValues(projects: IProject[]): ISelectValuesGroup[] {
  let projectTypes = new Set<string>(),
    frontend = new Set<string>(),
    backend = new Set<string>(),
    devops = new Set<string>();

  projects.forEach((project: IProject) => {
    project.technologies.backend.forEach(backend.add, backend);
    project.technologies.frontend.forEach(frontend.add, frontend);
    project.technologies.devops.forEach(devops.add, devops);
    projectTypes.add(project.type);
  });

  const randomId = () => Math.floor(Math.random() * 1_000_000);

  const stringSetToSelectValuesGroup = (
    stringArray: Set<string>,
    groupName: string
  ): ISelectValuesGroup => ({
    groupName,
    id: randomId(),
    values: Array.from(stringArray)
      .sort()
      .map((string) => ({
        id: randomId(),
        value: string,
        displayValue: string,
      })),
  });

  const filterValues: ISelectValuesGroup[] = [
    stringSetToSelectValuesGroup(backend, "Back-end"),
    stringSetToSelectValuesGroup(frontend, "Front-end"),
    stringSetToSelectValuesGroup(devops, "DevOps"),
    stringSetToSelectValuesGroup(projectTypes, "Type"),
  ];

  return filterValues;
}

function filterProjects(
  projects: IProject[],
  filterBy: string,
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>
) {
  if (!filterBy) {
    setProjects(projects);
  } else {
    const filteredProjects = projects.filter(
      (project) =>
        project.type === filterBy ||
        project.technologies.backend.includes(filterBy) ||
        project.technologies.frontend.includes(filterBy) ||
        project.technologies.devops.includes(filterBy)
    );
    setProjects(filteredProjects);
  }
}

function sortProjects(
  projects: IProject[],
  sortBy: string,
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>
) {
  if (!sortBy) {
    sortProjects(projects, "-dateStarted", setProjects);
  } else {
    const isDesc = sortBy.startsWith("-");
    if (isDesc) sortBy = sortBy.slice(1, sortBy.length);
    const sortedProjects = projects.sort((a: any, b: any) =>
      isDesc ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]
    );
    setProjects(sortedProjects);
  }
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>(getProjects());

  const [filterBy, setFilterBy] = useState("");
  const [filterValues, setFilterValues] = useState<ISelectValuesGroup[]>([]);
  const [sortBy, setSortBy] = useState("");

  const sortValues: ISelectValue[] = [
    {
      id: 2,
      value: "-dateStarted",
      displayValue: "Date, new to old",
    },
    {
      id: 1,
      value: "dateStarted",
      displayValue: "Date, old to new",
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

  const initializeFilterValues = () => {
    if (projects.length) {
      setFilterValues(getFilterValues(projects));
    }
  };

  const applyDefaultSorting = () => {
    if (projects.length) {
      sortProjects([...projects], "-dateStarted", setProjects);
    }
  };

  const handleFilterValuesChange = () => {
    if (projects.length) {
      const allProjects = getProjects();
      filterProjects(allProjects, filterBy, setProjects);
    }
  };

  const handleSortValuesChange = () => {
    if (projects.length) {
      sortProjects([...projects], sortBy, setProjects);
    }
  };

  useEffect(() => {
    initializeFilterValues();
    applyDefaultSorting();
  }, []);
  useEffect(() => handleFilterValuesChange(), [filterBy]);
  useEffect(() => handleSortValuesChange(), [sortBy]);

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
