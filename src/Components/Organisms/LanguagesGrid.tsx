import React from "react";

import "./LanguagesGrid.scss";
import LanguageCard from "../Molecules/LanguageCard";
import { Language } from "../../Types/ApiTypes";

interface Props {
  languages: Language[];
}

/**
 * Renders a grid of languages
 *
 * @return {*}  {JSX.Element}
 */
const LanguagesGrid: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="languages-grid">
      {props.languages.map((lang) => (
        <LanguageCard
          key={lang.pk}
          name={lang.name}
          code={lang.code}
          level={lang.level}
          learningHistory={lang.learningHistory}
        />
      ))}
    </div>
  );
};

export default LanguagesGrid;
