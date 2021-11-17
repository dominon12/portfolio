import React from "react";

import "./ExperienceLiana.scss";
import { getExperience } from "../../Services/DataService";
import CareerEvent from "../Molecules/CareerEvent";

const ExperienceLiana: React.FC = () => {
  const careerEvents = getExperience();

  return (
    <div className="experience-liana">
      {careerEvents
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map((careerEvent) => (
          <CareerEvent
            key={careerEvent.id}
            title={careerEvent.title}
            description={careerEvent.description}
            place={careerEvent.place}
            date={careerEvent.date}
            isRelevant={careerEvent.isRelevant}
          />
        ))}
    </div>
  );
};

export default ExperienceLiana;
