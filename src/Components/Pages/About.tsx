import React from "react";

import "./About.scss";
import Title from "../Atoms/Title";
import Image from "../Atoms/Image";
import Button from "../Atoms/Button";
import { getAbout } from "../../Services/DataService";
import { useHistory } from "react-router";
import InfoSection from "../Organisms/InfoSection";

const About: React.FC = () => {
  const history = useHistory();
  const aboutData = getAbout();

  return (
    <InfoSection
      left={
        <>
          <Title className="about__title">{aboutData?.title}</Title>
          <p className="about__description">{aboutData?.description}</p>
          <Button type="primary" onClick={() => history.push("/projects")}>
            Begin
          </Button>
        </>
      }
      right={
        <Image
          src={aboutData.image}
          alt="My profile picture"
          width="500"
          height="500"
          className="about__image"
        />
      }
    />
  );
};

export default About;
