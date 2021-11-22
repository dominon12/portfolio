import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

import "./ProjectsNav.scss";
import Title from "../Atoms/Title";
import Select from "../Molecules/Select";
import useGetParams from "../../Hooks/useGetParams";
import {
  getFilterValues,
  getSortValues,
  handleChangeGetParams,
} from "../../Services/ProjectsService";
import { getProjects } from "../../Services/DataService";
import { filterByKey, sortByKey } from "../../Services/GetParamKeys";

const ProjectsNav: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const getParams = useGetParams();

  const allProjects = getProjects();
  const sortValues = getSortValues();
  const filterValues = getFilterValues(allProjects);

  const applyDefaultSorting = () => {
    const sortBy = getParams.get(sortByKey) ?? "";
    if (!sortBy) {
      const defaultSortByParam = "-dateStarted";
      handleChangeGetParams(
        sortByKey,
        defaultSortByParam,
        getParams,
        pathname,
        history
      );
    }
  };

  useEffect(() => {
    applyDefaultSorting();
  }, []);

  return (
    <nav className="projects-nav">
      <Select
        label="Filter"
        value={getParams.get(filterByKey) ?? ""}
        values={filterValues}
        handleChange={(value: string) =>
          handleChangeGetParams(
            filterByKey,
            value,
            getParams,
            pathname,
            history
          )
        }
      />
      <Title className="projects-nav__title">Projects</Title>
      <Select
        label="Sort"
        value={getParams.get(sortByKey) ?? ""}
        values={sortValues}
        handleChange={(value: string) =>
          handleChangeGetParams(sortByKey, value, getParams, pathname, history)
        }
      />
    </nav>
  );
};

export default ProjectsNav;
