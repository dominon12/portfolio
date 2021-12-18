import React from "react";

import "./ExperienceLiana.scss";
import CareerEvent from "../Molecules/CareerEvent";
import { CareerEvent as ICareerEvent } from "../../Types/ApiTypes";

interface Props {
  careerEvents: ICareerEvent[];
}

/**
 * Renders some sort of a liana with
 * leafs representing career events in
 * chronological order
 *
 * @return {*}  {JSX.Element}
 */
const ExperienceLiana: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="experience-liana">
      {props.careerEvents.map((careerEvent) => (
        <CareerEvent
          key={careerEvent.pk}
          title={careerEvent.title}
          description={careerEvent.description}
          place={careerEvent.place}
          date={new Date(careerEvent.date)}
          isRelevant={careerEvent.isRelevant}
        />
      ))}
    </div>
  );
};

export default ExperienceLiana;
