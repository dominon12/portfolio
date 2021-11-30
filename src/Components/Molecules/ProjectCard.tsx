import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { FiShare2 } from "react-icons/fi";
import { ImCross } from "react-icons/im";

import "./ProjectCard.scss";
import BrickLink from "../Atoms/BrickLink";
import { IProjectTechnologies } from "../../Types/PortfolioDataTypes";
import { IImage } from "../../Types/SystemTypes";
import useGetParams from "../../Hooks/useGetParams";
import { projectIdKey } from "../../Services/GetParamKeys";
import {
  setMainContainerScroll,
  updateUrlWithGetParams,
} from "../../Services/HelperService";
import { ShareModalContext } from "../../Contexts/ShareModalContext";

interface Props {
  id: number;
  title: string;
  image: IImage;
  shortDescription: string;
  description: string[];
  dateStarted: Date;
  technologies: IProjectTechnologies;
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
      setMainContainerScroll("hidden");
    } else if (!nextExpanded && expanded) {
      getParams.delete(projectIdKey);
      setMainContainerScroll("auto");
    }
    updateUrlWithGetParams(history, pathname, getParams);
  };

  if (!expanded) {
    // small card
    return (
      <article
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
                <h2 className="project-card__title">{props.title}</h2>
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
        <h2 className="project-card-expanded__title">{props.title}</h2>
      </div>
      <div className="project-card-expanded__header_right">
        <span className="project-card-expanded__date">
          {props.dateStarted.toDateString()}
        </span>
        <FiShare2
          className="project-card-expanded__header_icon hover-highlight"
          onClick={() => setVisible(true)}
        />
        <ImCross
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
  const renderExpandedDescription = (): JSX.Element => {
    const technologies = [
      {
        id: 1,
        groupName: "Back-end",
        technologies: props.technologies.backend,
      },
      {
        id: 2,
        groupName: "Front-end",
        technologies: props.technologies.frontend,
      },
      {
        id: 3,
        groupName: "DevOps",
        technologies: props.technologies.devops,
      },
    ];

    return (
      <>
        <div className="project-card-expanded__description-container">
          {props.description.map((descriptionUnit, index) => (
            <p
              key={index}
              className="project-card-expanded__full-description"
              dangerouslySetInnerHTML={{ __html: descriptionUnit }}
            ></p>
          ))}
        </div>
        <dl className="project-card-expanded__description-list">
          {technologies
            .filter(
              (technologyGroup) => technologyGroup.technologies.length > 0
            )
            .map((technologyGroup) => (
              <div
                key={technologyGroup.id}
                className="project-card-expanded__description-list_item"
              >
                <dt>{technologyGroup.groupName}</dt>
                <dd>{technologyGroup.technologies.join(", ")}</dd>
              </div>
            ))}
        </dl>
      </>
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
      <div className="project-card-expanded__content">
        <div className="project-card-expanded__img-container">
          <img className="project-card-expanded__img" {...props.image} />
        </div>
        <div className="project-card-expanded__text-content">
          {renderProjectHeader()}
          {renderExpandedDescription()}
          {renderLinks()}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
