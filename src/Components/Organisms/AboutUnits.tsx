import React, { useContext } from "react";
import { useHistory } from "react-router";

import "./AboutUnits.scss";
import { SideBarContext } from "../../Contexts/SideBarContext";
import { IAboutUnit } from "../../Types/Types";
import Button from "../Atoms/Button";
import JumpingArrow from "../Atoms/JumpingArrow";
import Title from "../Atoms/Title";
import InfoSection from "../Templates/InfoSection";

const MOBILE_BEGINS_AFTER = 425;

interface Props {
  aboutUnits: IAboutUnit[];
}

const AboutUnits: React.FC<Props> = ({ aboutUnits }) => {
  const history = useHistory();

  const { setVisible } = useContext(SideBarContext);

  const isMobile = document.body.offsetWidth <= MOBILE_BEGINS_AFTER;

  const handleBegin = isMobile
    ? () => setVisible(true)
    : () => history.push("/projects");

  const renderAboutUnit = (aboutUnit: IAboutUnit, index: number) => {
    const infoBlock = (
      <>
        <Title className="about-units__title">{aboutUnit.title}</Title>
        <p className="about-units__description">{aboutUnit.description}</p>
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
    const imageBlock = (
      <img {...aboutUnit.image} className="about-units__image" />
    );

    const indexIsEven = index % 2 === 0;
    const left = indexIsEven ? infoBlock : imageBlock;
    const right = indexIsEven ? imageBlock : infoBlock;
    const leftClassName = indexIsEven ? "" : "about-units__container_info-block";
    const rightClassName = indexIsEven ? "about-units__container_info-block" : "";

    return (
      <React.Fragment key={aboutUnit.id}>
        <InfoSection
          containerClassName={`about-units__container ${
            index === 0 ? "has-jumping-arrow" : ""
          }`}
          left={left}
          right={right}
          leftContainerClassName={leftClassName}
          rightContainerClassName={rightClassName}
        />
        {index === 0 && <JumpingArrow className="about-units__jumping-arrow" />}
      </React.Fragment>
    );
  };

  return <div className="about-units">{aboutUnits.map(renderAboutUnit)}</div>;
};

export default AboutUnits;
