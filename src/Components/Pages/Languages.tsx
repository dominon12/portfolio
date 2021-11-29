import React from "react";
import { Helmet } from "react-helmet";

import "./Languages.scss";
import Title from "../Atoms/Title";
import LanguagesGrid from "../Organisms/LanguagesGrid";
import { getAbout } from "../../Services/DataService";

/**
 * Page with a list of languages
 *
 * @return {*}  {JSX.Element}
 */
const Languages: React.FC = (): JSX.Element => {
  const { nickname } = getAbout();

  return (
    <>
      <Helmet>
        <title>Languages | {nickname}</title>
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
