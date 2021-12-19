import React, { useContext } from "react";
import { FiShare2 } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { useHistory, useLocation } from "react-router-dom";

import Subtitle from "../Atoms/Subtitle";
import "./ProjectHeader.scss";
import { ShareModalContext } from "../../Contexts/ShareModalContext";
import useGetParams from "../../Hooks/useGetParams";
import { projectIdKey } from "../../Services/GetParamKeys";
import { updateUrlWithGetParams } from "../../Services/HelperService";

interface Props {
  date: Date;
  name: string;
}

/**
 * Renders expanded project header
 * with a share and close icons.
 *
 * @return {*}  {JSX.Element}
 */
const ProjectHeader: React.FC<Props> = (props): JSX.Element => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { setVisible } = useContext(ShareModalContext);
  const getParams = useGetParams();

  /**
   * Removes 'projectId' key
   * from url search params.
   */
  const setNotExpanded = () => {
    getParams.delete(projectIdKey);
    updateUrlWithGetParams(history, pathname, getParams);
  };

  return (
    <div className="project-header">
      <div className="project-header__left">
        <Subtitle className="project-header__title">{props.name}</Subtitle>
      </div>
      <div className="project-header__right">
        <span className="project-header__date">
          {props.date.toDateString()}
        </span>
        <FiShare2
          tabIndex={0}
          aria-label="Share project"
          className="project-header__icon hover-highlight"
          onClick={() => setVisible(true)}
        />
        <ImCross
          tabIndex={0}
          aria-label="Close project"
          className="project-header__icon hover-highlight"
          onClick={setNotExpanded}
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
