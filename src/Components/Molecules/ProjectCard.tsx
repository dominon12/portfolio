import React, { useState } from "react";

import "./ProjectCard.scss";
import BrickLink from "../Atoms/BrickLink";
import { ProjectTechnologies } from "../../Types/Types";

interface Props {
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  dateStarted: Date;
  technologies: ProjectTechnologies;
  repository?: string;
  link?: string;
}

const ProjectCard: React.FC<Props> = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);
  const expandedClass = () => (expanded ? "expanded" : "normal");

  const renderExpandedDescription = () => (
    <>
      <p className="project-card__full-description">{props.description}</p>
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
            src={props.image}
            alt={props.title}
            width="200"
            height="250"
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
