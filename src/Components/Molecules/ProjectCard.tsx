import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { FiShare2 } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import FocusTrap from "focus-trap-react";

import "./ProjectCard.scss";
import BrickLink from "../Atoms/BrickLink";
import { IImage } from "../../Types/SystemTypes";
import useGetParams from "../../Hooks/useGetParams";
import { projectIdKey } from "../../Services/GetParamKeys";
import { updateUrlWithGetParams } from "../../Services/HelperService";
import { ShareModalContext } from "../../Contexts/ShareModalContext";
import { Technology } from "../../Types/ApiTypes";
import { groupTechnologiesByGroupName } from "../../Services/ProjectsService";

interface Props {
  id: number;
  name: string;
  image: IImage;
  shortDescription: string;
  description: string;
  date: Date;
  technologies: Technology[];
  repository?: string;
  link?: string;
}

/**
 * Returns a card-like element with passed
 * project's data.
 *
 * If user clicks on the card, it's being expanded to
 * the whole container's width and height.
 *
 * @return {*}  {JSX.Element}
 */
const ProjectCard: React.FC<Props> = (props): JSX.Element => {
  const history = useHistory();
  const getParams = useGetParams();
  const { pathname } = useLocation();
  const { setVisible } = useContext(ShareModalContext);

  const expanded = parseInt(getParams.get(projectIdKey) ?? "0") === props.id;

  /**
   * Sets 'projectId' url search param to the
   * 'id' prop if 'nextExpanded' argument is truthy
   * and removes it in the other case.
   *
   * Disables or enables
   * scroll in the main container.
   *
   * After that updates url.
   *
   * @param {boolean} nextExpanded
   */
  const setExpanded = (nextExpanded: boolean) => {
    if (nextExpanded && !expanded) {
      getParams.set(projectIdKey, props.id.toString());
    } else if (!nextExpanded && expanded) {
      getParams.delete(projectIdKey);
    }
    updateUrlWithGetParams(history, pathname, getParams);
  };

  if (!expanded) {
    // small card
    return (
      <article
        tabIndex={0}
        aria-label={props.name}
        className="project-card hover-animation"
        onClick={() => setExpanded(true)}
      >
        <div className="project-card__content">
          <div className="project-card__img-container">
            <img className="project-card__img" {...props.image} />
          </div>
          <div className="project-card__text-content">
            <div className="project-card__title-wrapper">
              <div className="project-card__bar_left">
                <h2 className="project-card__title">{props.name}</h2>
              </div>
            </div>
            <p className="project-card__short-description">
              {props.shortDescription}
            </p>
          </div>
        </div>
      </article>
    );
  }

  /**
   * Renders expanded project header
   * with a share and close icons.
   *
   * @return {*}  {JSX.Element}
   */
  const renderProjectHeader = (): JSX.Element => (
    <div className="project-card-expanded__header">
      <div className="project-card-expanded__header_left">
        <h2 className="project-card-expanded__title">{props.name}</h2>
      </div>
      <div className="project-card-expanded__header_right">
        <span className="project-card-expanded__date">
          {props.date.toDateString()}
        </span>
        <FiShare2
          tabIndex={0}
          aria-label="Share project"
          className="project-card-expanded__header_icon hover-highlight"
          onClick={() => setVisible(true)}
        />
        <ImCross
          tabIndex={0}
          aria-label="Close project"
          className="project-card-expanded__header_icon hover-highlight"
          onClick={() => setExpanded(false)}
        />
      </div>
    </div>
  );

  /**
   * Renders a description content of
   * the expanded card element.
   *
   * @return {*}  {JSX.Element}
   */
  const renderExpandedDescription = (): JSX.Element => (
    <div className="project-card-expanded__description-container">
      <p
        className="project-card-expanded__full-description"
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></p>
    </div>
  );

  /**
   * Renders technologies used in
   * the current project.
   *
   * @return {*} {JSX.Element}
   */
  const renderTechnologies = (): JSX.Element => {
    const groupedTechnologies = groupTechnologiesByGroupName(
      props.technologies
    );

    return (
      <dl className="project-card-expanded__description-list">
        {Object.keys(groupedTechnologies).map((groupName: string) => (
          <div
            key={groupName}
            className="project-card-expanded__description-list_item"
          >
            <dt>{groupName}</dt>
            <dd>{groupedTechnologies[groupName].join(", ")}</dd>
          </div>
        ))}
      </dl>
    );
  };

  /**
   * Renders links to projects' page
   * or to project's source code if
   * the project has one.
   */
  const renderLinks = () => {
    const links = [
      {
        id: 1,
        name: "Project link 🔗",
        href: props.link,
      },
      {
        id: 2,
        name: "Source code 🤖",
        href: props.repository,
      },
    ];

    return (
      <div className="project-card-expanded__links">
        {links
          .filter((link) => !!link.href)
          .map((link: any) => (
            <BrickLink
              key={link.id}
              href={link.href}
              className="project-card-expanded__link"
              rel="noopener"
            >
              {link.name}
            </BrickLink>
          ))}
      </div>
    );
  };

  return (
    // expanded card
    <article className="project-card-expanded">
      <FocusTrap>
        <div className="project-card-expanded__content">
          <div className="project-card-expanded__img-container">
            <img className="project-card-expanded__img" {...props.image} />
          </div>
          <div className="project-card-expanded__text-content">
            {renderProjectHeader()}
            {renderExpandedDescription()}
            {renderTechnologies()}
            {renderLinks()}
          </div>
        </div>
      </FocusTrap>
    </article>
  );
};

export default ProjectCard;
