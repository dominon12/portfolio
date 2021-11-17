import React from "react";
import { Helmet } from "react-helmet";

import "./Languages.scss";
import Title from "../Atoms/Title";
import LanguagesGrid from "../Organisms/LanguagesGrid";

const Languages: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Languages | Dominon12</title>
        <meta
          name="description"
          content="Languages I speak and history about learning them."
        />
      </Helmet>
      <div className="languages">
        <Title className="languages__title">Languages I speak</Title>
        <LanguagesGrid />
      </div>
    </>
  );
};

export default Languages;
