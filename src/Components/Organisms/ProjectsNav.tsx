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

/**
 * Renders a nav bar with select elements
 * which provide an ability to select sorting
 * and filtering options
 *
 * @return {*}  {JSX.Element}
 */
const ProjectsNav: React.FC = (): JSX.Element => {
  const history = useHistory();
  const { pathname } = useLocation();
  const getParams = useGetParams();

  const allProjects = getProjects();
  const sortValues = getSortValues();
  const filterValues = getFilterValues(allProjects);

  /**
   * Sets url search param 'sortBy' to '-dateStarted'
   * if there is no already applied one
   */
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

  /**
   * Invokes 'applyDefaultSorting' function 
   * after component did mount in order to 
   * sort projects by 'dateStarted' attribute.
   * 
   * The idea of this action is to show to a user
   * a list of projects sorted from new to old
   */
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
