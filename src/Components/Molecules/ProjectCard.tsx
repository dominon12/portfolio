import React, { useState } from "react";

import "./ProjectCard.scss";
import Image from "../Atoms/Image";

interface Props {
  title: string;
  image: string;
  shortDescription: string;
}

const ProjectCard: React.FC<Props> = (props) => {
  return (
    <article className="project-card hover-animation">
      <Image
        className="project-card__img"
        src={props.image}
        alt={props.title}
        width="200"
        height="250"
      />
      <div className="project-card__text-content">
        <div className="project-card__title">{props.title}</div>
        <p className="project-card__short-description">
          {props.shortDescription}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
