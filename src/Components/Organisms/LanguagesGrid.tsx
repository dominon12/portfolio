import React from "react";

import "./LanguagesGrid.scss";
import LanguageCard from "../Molecules/LanguageCard";
import { getLanguages } from "../../Services/DataService";

interface Props {}

const LanguagesGrid: React.FC<Props> = (props) => {
  const languages = getLanguages();

  return (
    <div className="languages-grid">
      {languages.map((lang) => (
        <LanguageCard
          key={lang.id}
          name={lang.name}
          code={lang.code}
          level={lang.level}
          learningStory={lang.learningStory}
        />
      ))}
    </div>
  );
};

export default LanguagesGrid;
