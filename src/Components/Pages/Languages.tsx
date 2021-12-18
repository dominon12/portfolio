import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./Languages.scss";
import Title from "../Atoms/Title";
import LanguagesGrid from "../Organisms/LanguagesGrid";
import { RootState } from "../../Redux/Types";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";
import { Language } from "../../Types/ApiTypes";

/**
 * Page with a list of languages
 *
 * @return {*}  {JSX.Element}
 */
const Languages: React.FC = (): JSX.Element => {
  const profile = useSelector((state: RootState) => state.about.data);
  const {
    data: languages,
    pending,
    error,
  } = useSelector((state: RootState) => state.languages);

  return (
    <>
      <Helmet>
        <title>Languages | {profile?.nickname ?? ""}</title>
        <meta
          name="description"
          content="Languages I speak and history about learning them."
        />
      </Helmet>
      <div className="languages">
        <Title className="languages__title">Languages I speak</Title>
        <ApiResponseTemplate
          render={() => <LanguagesGrid languages={languages as Language[]} />}
          pending={pending}
          error={error}
        />
      </div>
    </>
  );
};

export default Languages;
