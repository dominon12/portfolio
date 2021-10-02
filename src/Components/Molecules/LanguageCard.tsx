import React from "react";
import Subtitle from "../Atoms/Subtitle";

import "./LanguageCard.scss";

interface Props {
  name: string;
  code: string;
  level: string;
  learningStory: string;
}

const LanguageCard: React.FC<Props> = (props) => {
  return (
    <article
      className="language-card hover-animation"
      style={{
        backgroundImage: `url(https://flagcdn.com/w640/${props.code}.png)`,
      }}
    >
      <div className="language-card__content">
        <Subtitle className="language-card__content_name">
          {props.name} - {props.level}
        </Subtitle>
        <p className="language-card__content_learning-story">
          {props.learningStory}
        </p>
      </div>
    </article>
  );
};

export default LanguageCard;
