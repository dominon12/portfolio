import React, { useContext } from "react";

import "./About.scss";
import Title from "../Atoms/Title";
import Image from "../Atoms/Image";
import Button from "../Atoms/Button";
import { getAbout } from "../../Services/DataService";
import { useHistory } from "react-router";
import InfoSection from "../Organisms/InfoSection";
import { SideBarContext } from "../../Contexts/SideBarContext";
import JumpingArrow from "../Atoms/JumpingArrow";
import { AboutUnit } from "../../Types/Types";

const MOBILE_BEGINS_AFTER = 425;

const About: React.FC = () => {
  const history = useHistory();
  const aboutData = getAbout();

  const { setVisible } = useContext(SideBarContext);

  const isMobile = document.body.offsetWidth <= MOBILE_BEGINS_AFTER;

  let handleBegin = isMobile
    ? () => setVisible(true)
    : () => history.push("/projects");

  const renderAboutUnit = (aboutUnit: AboutUnit, index: number) => {
    const infoBlock = (
      <>
        <Title className="about__title">{aboutUnit.title}</Title>
        <p className="about__description">{aboutUnit.description}</p>
        {aboutUnit.useBeginBtn && (
          <Button type="primary" onClick={handleBegin}>
            Begin
          </Button>
        )}
      </>
    );
    const imageBlock = <img {...aboutUnit.image} className="about__image" />;
    const evenIndex = index % 2 === 0;
    const left = evenIndex ? infoBlock : imageBlock;
    const right = evenIndex ? imageBlock : infoBlock;
    const leftClassName = evenIndex ? "" : "about__container_info-block";
    const rightClassName = evenIndex ? "about__container_info-block" : "";

    return (
      <React.Fragment key={aboutUnit.id}>
        <InfoSection
          containerClassName={`about__container ${
            index === 0 ? "has-jumping-arrow" : ""
          }`}
          left={left}
          right={right}
          leftContainerClassName={leftClassName}
          rightContainerClassName={rightClassName}
        />
        {index === 0 && <JumpingArrow className="about__jumping-arrow" />}
      </React.Fragment>
    );
  };

  return (
    <div className="about">{aboutData.aboutUnits.map(renderAboutUnit)}</div>
  );
};

export default About;
