import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";

import "./CareerEvent.scss";
import useAppearanceInViewport from "../../Hooks/useAppearanceInViewport";

interface Props {
  title: string;
  description: string;
  place: string;
  date: Date;
  isRelevant: boolean;
}

/**
 * 'Liana's' leaf which represents
 * a career event.
 *
 * @return {*}  {JSX.Element}
 */
const CareerEvent: React.FC<Props> = (props): JSX.Element => {
  const leafRef = useAppearanceInViewport("fade-in");

  return (
    <div
      tabIndex={0}
      ref={leafRef}
      className={`career-event ${!props.isRelevant && "irrelevant"}`}
    >
      <div className="career-event__content">
        <h3 className="career-event__title">{props.title}</h3>
        <p className="career-event__description">{props.description}</p>
      </div>
      <div className="career-event__footer">
        <div className="career-event__footer_data-container">
          <HiOutlineLocationMarker className="career-event__footer_icon" />
          {props.place}
        </div>
        <div className="career-event__footer_data-container">
          <BsFillCalendarFill className="career-event__footer_icon" />
          {props.date.toDateString()}
        </div>
      </div>
    </div>
  );
};

export default CareerEvent;
