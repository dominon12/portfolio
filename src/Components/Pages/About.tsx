import React, { useContext } from "react";

import "./About.scss";
import Title from "../Atoms/Title";
import Image from "../Atoms/Image";
import Button from "../Atoms/Button";
import { getAbout } from "../../Services/DataService";
import { useHistory } from "react-router";
import InfoSection from "../Organisms/InfoSection";
import { SideBarContext } from "../../Contexts/SideBarContext";

const MOBILE_BEGINS_AFTER = 425;

const About: React.FC = () => {
  const history = useHistory();
  const aboutData = getAbout();

  const { setVisible } = useContext(SideBarContext);

  const isMobile = document.body.offsetWidth <= MOBILE_BEGINS_AFTER;

  let handleBegin = isMobile
    ? () => setVisible(true)
    : () => history.push("/projects");

  return (
    <InfoSection
      left={
        <>
          <Title className="about__title">{aboutData?.title}</Title>
          <p className="about__description">{aboutData?.description}</p>
          <Button type="primary" onClick={handleBegin}>
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
