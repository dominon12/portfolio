import React, { useEffect, useState } from "react";

import { getProjects } from "../Services/DataService";
import {
  filterByKey,
  pageKey,
  pageSizeKey,
  sortByKey,
} from "../Services/GetParamKeys";
import {
  filterProjects,
  paginate,
  sortProjects,
} from "../Services/ProjectsService";
import { IProject } from "../Types/PortfolioDataTypes";

interface Props {
  loadingDelay?: number;
}

/**
 * Encapsulates logic of sorting, filtering
 * and paginating of an array of projects
 *
 * @param {Props} props
 * @return {*}  {{
 *   projects: IProject[]; - projects after sorting and filtering
 *   pageProjects: IProject[]; - projects after pagination
 *   isLoading: boolean; - indicates whether projects are still loading
 * }}
 */
function useProjects(props: Props): {
  projects: IProject[];
  pageProjects: IProject[];
  isLoading: boolean;
} {
  const allProjects = getProjects();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [pageProjects, setPageProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Filters, sorts and paginates all projects.
   * After filtering and sorting, sets 'project' variable.
   * After paginating, sets 'pageProjects' variable.
   */
  const processProducts = () => {
    const getParams = new URLSearchParams(window.location.search);
    let nextProjects = [...allProjects];

    // filter
    const filterBy = getParams.get(filterByKey);
    nextProjects = filterProjects(nextProjects, filterBy);

    // sort
    const sortBy = getParams.get(sortByKey) ?? "";
    nextProjects = sortProjects(nextProjects, sortBy);

    setProjects(nextProjects);

    // paginate
    const pageSize = parseInt(getParams.get(pageSizeKey) ?? "6");
    const pagesNum = Math.ceil(nextProjects.length / pageSize);
    const page = parseInt(getParams.get(pageKey) ?? "1");
    const disablePagination =
      pagesNum === 1 || page > pagesNum || pageSize <= 0;

    if (!disablePagination) {
      nextProjects = paginate(nextProjects, page, pageSize);
    }

    setPageProjects(nextProjects);
  };

  /**
   * Invokes operations with projects
   * on url search params change
   */
  useEffect(() => {
    setIsLoading(true);
    processProducts();

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, props.loadingDelay ?? 0);

    return () => {
      clearTimeout(timeout);
    };
  }, [window.location.search]);

  return { projects, pageProjects, isLoading };
}

export default useProjects;
