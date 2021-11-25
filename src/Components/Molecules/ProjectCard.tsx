import React, { useState } from "react";

import "./ProjectCard.scss";
import BrickLink from "../Atoms/BrickLink";
import { IProjectTechnologies } from "../../Types/PortfolioDataTypes";
import { IImage } from "../../Types/SystemTypes";

interface Props {
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
 * the whole container's width.
 *
 * @return {*}  {JSX.Element}
 */
const ProjectCard: React.FC<Props> = (props): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  /**
   * Toggles 'expanded' state variable
   */
  const toggleExpanded = () => setExpanded((prev) => !prev);

  /**
   * Decides whether it should return 'expanded'
   * or 'normal' class based on 'expanded' state
   * variable.
   *
   * @return {*}  {string} - result class name
   */
  const expandedClass = (): string => (expanded ? "expanded" : "normal");

  /**
   * Renders content of an expanded card element
   *
   * @return {*}  {JSX.Element}
   */
  const renderExpandedDescription = (): JSX.Element => (
    <>
      <div className="project-card__description-container">
        {props.description.map((descriptionUnit) => (
          <p
            className="project-card__full-description"
            dangerouslySetInnerHTML={{ __html: descriptionUnit }}
          ></p>
        ))}
      </div>
      <dl className="project-card__description-list">
        {props.technologies.backend.length > 0 && (
          <div className="project-card__description-list_item">
            <dt>Back-end</dt>
            <dd>{props.technologies.backend.join(", ")}</dd>
          </div>
        )}
        {props.technologies.frontend.length > 0 && (
          <div className="project-card__description-list_item">
            <dt>Front-end</dt>
            <dd>{props.technologies.frontend.join(", ")}</dd>
          </div>
        )}
        {props.technologies.devops.length > 0 && (
          <div className="project-card__description-list_item">
            <dt>DevOps</dt>
            <dd>{props.technologies.devops.join(", ")}</dd>
          </div>
        )}
      </dl>
    </>
  );

  /**
   * Renders links to projects' page
   * or to project's source code if
   * the project has one.
   */
  const renderLinks = () =>
    (props.link || props.repository) && (
      <div className="project-card__links">
        {props.link && (
          <BrickLink
            href={props.link}
            className="project-card__link"
            rel="noopener"
          >
            Project link 🔗
          </BrickLink>
        )}
        {props.repository && (
          <BrickLink
            href={props.repository}
            className="project-card__link"
            rel="noopener"
          >
            Source code 🤖
          </BrickLink>
        )}
      </div>
    );

  return (
    <article
      className={`project-card hover-animation ${expandedClass()}`}
      onClick={toggleExpanded}
    >
      <div className={`project-card__content ${expandedClass()}`}>
        <div className={`project-card__img-container ${expandedClass()}`}>
          <img
            className={`project-card__img ${expandedClass()}`}
            {...props.image}
          />
        </div>
        <div className={`project-card__text-content ${expandedClass()}`}>
          <div className={`project-card__title-wrapper ${expandedClass()}`}>
            <h2 className="project-card__title">{props.title}</h2>
            {expanded && (
              <span className="project-card__date">
                {props.dateStarted.toDateString()}
              </span>
            )}
          </div>

          {expanded ? (
            <>
              {renderExpandedDescription()}
              {renderLinks()}
            </>
          ) : (
            <p className="project-card__short-description">
              {props.shortDescription}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
