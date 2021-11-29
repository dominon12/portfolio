import React from "react";
import { Helmet } from "react-helmet";

import "./ErrorTemplate.scss";
import { IImage } from "../../Types/SystemTypes";
import Title from "../Atoms/Title";
import InfoSection from "./InfoSection";
import { getAbout } from "../../Services/DataService";

interface Props {
  title: string;
  description: string;
  image: IImage;
  seoTitle: string;
  seoDescription: string;
}

/**
 * Page template to display an error with
 * title, description and additional content
 */
const ErrorTemplate: React.FC<Props> = (props) => {
  const { nickname } = getAbout();

  return (
    <>
      <Helmet>
        <title>
          {props.seoTitle} | {nickname}
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
              src={props.image.src}
              alt={props.image.alt}
              width={props.image.width}
              height={props.image.height}
            />
          </>
        }
      />
    </>
  );
};

export default ErrorTemplate;
