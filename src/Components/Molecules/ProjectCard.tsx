import React from "react";
import FocusTrap from "focus-trap-react";

import Subtitle from "../Atoms/Subtitle";
import "./ProjectCard.scss";
import { IImage } from "../../Types/SystemTypes";
import useGetParams from "../../Hooks/useGetParams";
import { projectIdKey } from "../../Services/GetParamKeys";
import { Technology } from "../../Types/ApiTypes";
import { groupTechnologiesByGroupName } from "../../Services/ProjectsService";
import TechnologiesDescriptionList from "./TechnologiesDescriptionList";
import ProjectHeader from "./ProjectHeader";
import ProjectLinks from "./ProjectLinks";
import { Link, useLocation } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  image: IImage;
  shortDescription: string;
  description: string;
  date: Date;
  technologies: Technology[];
  previewImage?: IImage;
  repository?: string;
  link?: string;
}

/**
 * Returns a card-like element with passed
 * project's data.
 *
 * @return {*}  {JSX.Element}
 */
const ProjectCard: React.FC<Props> = (props): JSX.Element => {
  const getParams = useGetParams();
  const location = useLocation();

  const expanded = parseInt(getParams.get(projectIdKey) ?? "0") === props.id;

  const projectIdConnector = location.search ? "&" : "?";

  const projectLink =
    location.pathname +
    location.search +
    projectIdConnector +
    "projectId=" +
    props.id.toString();

  const previewImageProps = props.previewImage
    ? props.previewImage
    : props.image;

  if (!expanded) {
    // small card
    return (
      <article
        tabIndex={0}
        aria-label={props.name}
        className="project-card hover-animation"
      >
        <Link to={projectLink} className="project-card__content">
          <div className="project-card__img-container">
            <img className="project-card__img" {...previewImageProps} />
          </div>
          <div className="project-card__text-content">
            <div className="project-card__title-wrapper">
              <div className="project-card__bar_left">
                <Subtitle className="project-card__title">
                  {props.name}
                </Subtitle>
              </div>
            </div>
            <p className="project-card__short-description">
              {props.shortDescription}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    // expanded card
    <article className="project-card-expanded">
      <FocusTrap>
        <div className="project-card-expanded__content">
          <div className="project-card-expanded__img-container">
            <img className="project-card-expanded__img" {...props.image} />
          </div>
          <div className="project-card-expanded__text-content">
            <ProjectHeader name={props.name} date={props.date} />
            <p
              className="project-card-expanded__full-description"
              dangerouslySetInnerHTML={{ __html: props.description }}
            ></p>
            <TechnologiesDescriptionList
              groupedTechnologies={groupTechnologiesByGroupName(
                props.technologies
              )}
            />
            <ProjectLinks link={props.link} repository={props.repository} />
          </div>
        </div>
      </FocusTrap>
    </article>
  );
};

export default ProjectCard;
