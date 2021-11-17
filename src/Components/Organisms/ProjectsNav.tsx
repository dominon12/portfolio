import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

import "./ProjectsNav.scss";
import Title from "../Atoms/Title";
import Select from "../Molecules/Select";
import { IProject } from "../../Types/Types";
import useGetParams from "../../Hooks/useGetParams";
import {
  filterProjects,
  getFilterValues,
  getSortValues,
  sortProjects,
} from "../../Services/ProjectsService";
import { getProjects } from "../../Services/DataService";
import usePrevious from "../../Hooks/usePrevious";

interface Props {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const ProjectsNav: React.FC<Props> = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const getParams = useGetParams();
  const prevGetParams = usePrevious<URLSearchParams | undefined>(getParams);

  const allProjects = getProjects();
  const sortValues = getSortValues();
  const filterValues = getFilterValues(allProjects);

  const sortByKey = "sortBy";
  const filterByKey = "filterBy";

  const updateUrl = (getParams: URLSearchParams) => {
    history.push(`${pathname}?${getParams.toString()}`);
  };

  const handleChangeGetParams = (paramName: string, value: string) => {
    !value ? getParams.delete(paramName) : getParams.set(paramName, value);
    updateUrl(getParams);
    handleManageSortAndFilter();
  };

  const applyDefaultSorting = () => {
    const sortBy = getParams.get(sortByKey) ?? "";
    if (!sortBy) {
      const defaultSortByParam = "-dateStarted";
      handleChangeGetParams(sortByKey, defaultSortByParam);
    }
  };

  useEffect(() => {
    applyDefaultSorting();
    handleManageSortAndFilter();
  }, []);

  const handleManageSortAndFilter = () => {
    const sortBy = getParams.get(sortByKey) ?? "";
    const filterBy = getParams.get(filterByKey) ?? "";

    const prevFilterBy = prevGetParams
      ? prevGetParams.get(filterByKey) ?? ""
      : "";

    let nextProjects = [...props.projects];

    if (filterBy !== prevFilterBy)
      nextProjects = filterProjects(allProjects, filterBy);
    if (sortBy) nextProjects = sortProjects(nextProjects, sortBy);

    const shouldUpdateState = filterBy !== prevFilterBy || sortBy;
    if (shouldUpdateState) props.setProjects(nextProjects);
  };

  return (
    <nav className="projects-nav">
      <Select
        label="Filter"
        value={getParams.get(filterByKey) ?? ""}
        values={filterValues}
        handleChange={(value: string) =>
          handleChangeGetParams(filterByKey, value)
        }
      />
      <Title className="projects-nav__title">Projects</Title>
      <Select
        label="Sort"
        value={getParams.get(sortByKey) ?? ""}
        values={sortValues}
        handleChange={(value: string) =>
          handleChangeGetParams(sortByKey, value)
        }
      />
    </nav>
  );
};

export default ProjectsNav;
