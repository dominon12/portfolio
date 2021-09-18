import React from "react";

import "./About.scss";
import Title from "../Atoms/Title";
import Image from "../Atoms/Image";
import Button from "../Atoms/Button";
import { getAbout } from "../../Services/DataService";
import { About as IAbout } from "../../Types/Types";

const About: React.FC = (props) => {
  const aboutData: IAbout = getAbout();

  return (
    <div className="about">
      <div className="about__content">
        <Title className="about__title">{aboutData?.title}</Title>
        <p className="about__description">{aboutData?.description}</p>
        <Button type="primary">Begin</Button>
      </div>
      <div className="about__image-wrapper">
        <Image
          src={aboutData.image}
          alt="My profile picture"
          width="250"
          height="250"
          className="about__image"
        />
      </div>
    </div>
  );
};

export default About;
