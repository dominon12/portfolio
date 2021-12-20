import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./Languages.scss";
import Title from "../Atoms/Title";
import LanguagesGrid from "../Organisms/LanguagesGrid";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import { Language } from "../../Types/ApiTypes";
import { selectLanguages } from "../../Redux/Languages/Selectors";
import { selectProfile } from "../../Redux/About/Selectors";

/**
 * Page with a list of languages
 *
 * @return {*}  {JSX.Element}
 */
const Languages: React.FC = (): JSX.Element => {
  const profile = useSelector(selectProfile);
  const languages = useSelector(selectLanguages);

  return (
    <>
      <Helmet>
        <title>Languages | {profile.data?.nickname ?? ""}</title>
        <meta
          name="description"
          content="Languages I speak and history about learning them."
        />
      </Helmet>
      <div className="languages">
        <Title className="languages__title">Languages I speak</Title>
        <ApiResponseTemplate
          render={() => (
            <LanguagesGrid languages={languages.data as Language[]} />
          )}
          pending={languages.pending}
          error={languages.error}
        />
      </div>
    </>
  );
};

export default Languages;
