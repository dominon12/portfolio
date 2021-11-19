import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

import "./ProjectsNav.scss";
import Title from "../Atoms/Title";
import Select from "../Molecules/Select";
import useGetParams from "../../Hooks/useGetParams";
import { getFilterValues, getSortValues } from "../../Services/ProjectsService";
import { getProjects } from "../../Services/DataService";
import { updateUrlWithGetParams } from "../../Services/HelperService";

interface Props {}

const ProjectsNav: React.FC<Props> = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const getParams = useGetParams();

  const allProjects = getProjects();
  const sortValues = getSortValues();
  const filterValues = getFilterValues(allProjects);

  const sortByKey = "sortBy";
  const filterByKey = "filterBy";
  const pageKey = "page";

  const handleChangeGetParams = (paramName: string, value: string) => {
    !value ? getParams.delete(paramName) : getParams.set(paramName, value);
    if (paramName === filterByKey) getParams.set(pageKey, "1");
    updateUrlWithGetParams(history, pathname, getParams);
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
  }, []);

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
