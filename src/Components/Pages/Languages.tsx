import React from "react";

import "./Languages.scss";
import Title from "../Atoms/Title";
import LanguagesGrid from "../Organisms/LanguagesGrid";

const Languages: React.FC = () => {
  return (
    <div className="languages">
      <Title className="languages__title">Languages I speak</Title>
      <LanguagesGrid />
    </div>
  );
};

export default Languages;
