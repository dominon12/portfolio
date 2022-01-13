/**
 * Contains helper - functions for working
 * which IProject[]
 */

import { TechGroup, Technology } from "../Types/ApiTypes";
import { ISelectValue, ISelectValuesGroup } from "../Types/FormTypes";
import { filterByKey, pageKey, pageSizeKey } from "./GetParamKeys";
import { updateUrlWithGetParams } from "./HelperService";

/**
 * Converts TechGroup[] to ISelectValuesGroup[]
 *
 * @export
 * @param {TechGroup[]} techGroups array of tech groups
 * @return {*}  {ISelectValuesGroup[]}
 */
export function getFilterValues(
  techGroups: TechGroup[] | null
): ISelectValuesGroup[] {
  if (!techGroups) return [];

  const filterValues: ISelectValuesGroup[] = techGroups.map((techGroup) => ({
    id: techGroup.pk,
    groupName: techGroup.name,
    values: techGroup.skills
      .filter((skill) => skill.showAsFilter)
      .map((skill) => ({
        id: skill.pk,
        value: skill.name,
        displayValue: skill.name,
      })),
  }));

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
      value: "-date",
      displayValue: "Date, new to old",
    },
    {
      id: 2,
      value: "date",
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
  if (paramName === filterByKey || paramName === pageSizeKey)
    getParams.set(pageKey, "1");
  updateUrlWithGetParams(history, pathname, getParams);
}

export function groupTechnologiesByGroupName(technologies: Technology[]) {
  const groupedTechnologies: any = {};

  technologies.forEach((t) => {
    if (t.techGroup in groupedTechnologies) {
      const technologiesList = groupedTechnologies[t.techGroup];

      if (!technologiesList.includes(t.name)) {
        technologiesList.push(t.name);
      }
    } else {
      groupedTechnologies[t.techGroup] = [t.name];
    }
  });

  return groupedTechnologies;
}
