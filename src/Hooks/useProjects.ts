import React, { useEffect, useState } from "react";

import { getProjects } from "../Services/DataService";
import {
  filterProjects,
  paginate,
  sortProjects,
} from "../Services/ProjectsService";
import { IProject } from "./../Types/Types";

interface Props {
  loadingDelay?: number;
}

function useProjects(props: Props) {
  const allProjects = getProjects();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [pageProjects, setPageProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // sorting
  const sortByKey = "sortBy";
  // filtering
  const filterByKey = "filterBy";
  // pagination
  const pageKye = "page";
  const pageSizeKey = "pageSize";
  const disablePaginationKey = "disablePagination";

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
    const page = parseInt(getParams.get(pageKye) ?? "1");
    const disablePagination =
      !!getParams.get(disablePaginationKey) ||
      pagesNum === 1 ||
      page > pagesNum;

    if (!disablePagination) {
      nextProjects = paginate(nextProjects, page, pageSize);
    }

    setPageProjects(nextProjects);
  };

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
