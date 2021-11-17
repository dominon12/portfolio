import { IProject, ISelectValue, ISelectValuesGroup } from "../Types/Types";
import { getRandomId } from "./HelperService";

const stringSetToSelectValuesGroup = (
  stringArray: Set<string>,
  groupName: string
): ISelectValuesGroup => ({
  groupName,
  id: getRandomId(),
  values: Array.from(stringArray)
    .sort()
    .map((string) => ({
      id: getRandomId(),
      value: string,
      displayValue: string,
    })),
});

export function getFilterValues(projects: IProject[]): ISelectValuesGroup[] {
  let projectTypes = new Set<string>(),
    frontend = new Set<string>(),
    backend = new Set<string>(),
    devops = new Set<string>();

  projects.forEach((project: IProject) => {
    projectTypes.add(project.type);
    project.technologies.frontend.forEach(frontend.add, frontend);
    project.technologies.backend.forEach(backend.add, backend);
    project.technologies.devops.forEach(devops.add, devops);
  });

  const filterValues: ISelectValuesGroup[] = [
    stringSetToSelectValuesGroup(projectTypes, "Type"),
    stringSetToSelectValuesGroup(frontend, "Front-end"),
    stringSetToSelectValuesGroup(backend, "Back-end"),
    stringSetToSelectValuesGroup(devops, "DevOps"),
  ];

  return filterValues;
}

export function getSortValues(): ISelectValue[] {
  const sortValues: ISelectValue[] = [
    {
      id: 1,
      value: "-dateStarted",
      displayValue: "Date, new to old",
    },
    {
      id: 2,
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
  return sortValues;
}

export function filterProjects(
  projects: IProject[],
  filterBy: string
): IProject[] {
  if (filterBy) {
    const filteredProjects = projects.filter(
      (project) =>
        project.type === filterBy ||
        project.technologies.backend.includes(filterBy) ||
        project.technologies.frontend.includes(filterBy) ||
        project.technologies.devops.includes(filterBy)
    );
    return filteredProjects;
  }
  return projects;
}

export function sortProjects(projects: IProject[], sortBy: string): IProject[] {
  if (sortBy) {
    const isDesc = sortBy.startsWith("-");

    if (isDesc) sortBy = sortBy.slice(1, sortBy.length);

    const sortedProjects = projects.sort((a: any, b: any) =>
      isDesc ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]
    );
    
    return sortedProjects;
  }
  return projects;
}
