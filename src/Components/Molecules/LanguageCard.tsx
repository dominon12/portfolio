import React from "react";
import Subtitle from "../Atoms/Subtitle";

import "./LanguageCard.scss";

interface Props {
  name: string;
  code: string;
  level: string;
  learningStory: string;
}

/**
 * Renders a card with info about a language
 *
 * @return {*}  {JSX.Element}
 */
const LanguageCard: React.FC<Props> = (props): JSX.Element => {
  return (
    <article
      title={props.name}
      className="language-card hover-animation"
      style={{
        backgroundImage: `url(https://flagcdn.com/w640/${props.code}.png)`,
      }}
    >
      <div tabIndex={0} className="language-card__content">
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
