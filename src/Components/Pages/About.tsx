import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import "./About.scss";
import Title from "../Atoms/Title";
import Button from "../Atoms/Button";
import { getAbout } from "../../Services/DataService";
import { useHistory } from "react-router";
import InfoSection from "../Organisms/InfoSection";
import { SideBarContext } from "../../Contexts/SideBarContext";
import JumpingArrow from "../Atoms/JumpingArrow";
import { IAboutUnit } from "../../Types/Types";

const MOBILE_BEGINS_AFTER = 425;

const About: React.FC = () => {
  const history = useHistory();
  const aboutData = getAbout();

  const { setVisible } = useContext(SideBarContext);

  const isMobile = document.body.offsetWidth <= MOBILE_BEGINS_AFTER;

  let handleBegin = isMobile
    ? () => setVisible(true)
    : () => history.push("/projects");

  const renderAboutUnit = (aboutUnit: IAboutUnit, index: number) => {
    const infoBlock = (
      <>
        <Title className="about__title">{aboutUnit.title}</Title>
        <p className="about__description">{aboutUnit.description}</p>
        {aboutUnit.button && (
          <Button
            type={aboutUnit.button.type}
            onClick={() =>
              aboutUnit.button?.link === "specialCase"
                ? handleBegin()
                : history.push(aboutUnit.button?.link ?? "/")
            }
          >
            {aboutUnit.button.text}
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
    <>
      <Helmet>
        <title>About | Dominon12</title>
        <meta
          name="description"
          content="Welcome to my personal website portfolio! On the about page you can read some information about me as a person and as a developer."
        />
      </Helmet>
      <div className="about">{aboutData.aboutUnits.map(renderAboutUnit)}</div>
    </>
  );
};

export default About;
