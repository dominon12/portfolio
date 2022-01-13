import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./ErrorTemplate.scss";
import Title from "../Atoms/Title";
import InfoSection from "./InfoSection";
import { selectProfile } from "../../Redux/About/Selectors";
import ErrorIllustration from "../../Assets/Images/System/ErrorIllustration.png";

interface Props {
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

/**
 * Page template to display an error with
 * title, description and additional content
 */
const ErrorTemplate: React.FC<Props> = (props) => {
  const profile = useSelector(selectProfile);

  return (
    <>
      <Helmet>
        <title>
          {props.seoTitle} | {profile.data?.nickname ?? ""}
        </title>
        <meta name="description" content={props.seoDescription} />
      </Helmet>
      <InfoSection
        containerClassName="error-template"
        left={
          <>
            <Title className="error-template__title">{props.title}</Title>
            <p className="error-template__description">{props.description}</p>
            {props.children}
          </>
        }
        right={
          <>
            <img
              className="error-template__illustration"
              src={ErrorIllustration}
              alt="Error illustration"
              width="500"
              height="500"
            />
          </>
        }
      />
    </>
  );
};

export default ErrorTemplate;
