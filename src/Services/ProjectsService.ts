/**
 * Contains helper - functions for working
 * which IProject[]
 */

import { IProject} from "../Types/PortfolioDataTypes";
import { ISelectValue, ISelectValuesGroup } from "../Types/SystemTypes";
import { filterByKey, pageKey } from "./GetParamKeys";
import { getRandomId, updateUrlWithGetParams } from "./HelperService";
import Paginator from "./Paginator";

/**
 * Converts a Set of strings to ISelectValuesGroup
 *
 * @param {Set<string>} stringArray set of strings
 * @param {string} groupName name of the group
 * @return {*}  {ISelectValuesGroup}
 */
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

/**
 * Extracts values from projects'
 * frontend, backend, devops and type attributes
 * and converts them to an array of ISelectValuesGroup
 * to use it with Select component
 *
 * @export
 * @param {IProject[]} projects array of projects
 * @return {*}  {ISelectValuesGroup[]}
 */
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

/**
 * Returns an array of ISelectValue which
 * will be used with Select component
 * to sort array of projects
 *
 * @export
 * @return {*}  {ISelectValue[]}
 */
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

/**
 * Filters an array of projects based on
 * 'filterBy' param value presence in
 * type, backend, devops or frontend project's array attributes
 *
 * @export
 * @param {IProject[]} projects array of projects to filter
 * @param {(string | null)} filterBy value to find in type, backend, devops or frontend project's array attributes
 * @return {*}  {IProject[]} filtered array of projects
 */
export function filterProjects(
  projects: IProject[],
  filterBy: string | null
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

/**
 * Sorts passed array of projects based
 * on 'sortBy' param which represents an attribute
 * of IProject object
 *
 * @export
 * @param {IProject[]} projects array of projects to sort
 * @param {string} sortBy attribute to use for sorting
 * @return {*}  {IProject[]} sorted array of projects
 */
export function sortProjects(projects: IProject[], sortBy: string): IProject[] {
  if (sortBy) {
    const isDesc = sortBy.startsWith("-");

    if (isDesc) sortBy = sortBy.slice(1, sortBy.length);

    projects = projects.sort((a: any, b: any) =>
      isDesc ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]
    );

    return projects;
  }
  return projects;
}

/**
 * Paginates an array using Paginator class
 *
 * @export
 * @template T
 * @param {T[]} arr array to paginate
 * @param {number} page number of the page to return
 * @param {number} pageSize number of elements on the page
 * @return {*}  {T[]} requested page
 */
export function paginate<T>(arr: T[], page: number, pageSize: number): T[] {
  const paginator = new Paginator(arr, pageSize);
  return paginator.getPage(page);
}

/**
 * Mutates url search params based on passed
 * parameters and updates current url with
 * new search params
 *
 * @export
 * @param {string} paramName key to url search params object
 * @param {string} value value to set
 * @param {URLSearchParams} getParams instance of URLSearchParams
 * @param {string} pathname url pathname
 * @param {*} history react history object
 */
export function handleChangeGetParams(
  paramName: string,
  value: string,
  getParams: URLSearchParams,
  pathname: string,
  history: any
) {
  !value ? getParams.delete(paramName) : getParams.set(paramName, value);
  if (paramName === filterByKey) getParams.set(pageKey, "1");
  updateUrlWithGetParams(history, pathname, getParams);
}
