import React from "react";

import "./DonationMethod.scss";
import { IImage } from "../../Types/SystemTypes";
import Subtitle from "../Atoms/Subtitle";

interface Props {
  name: string;
  comment: string;
  image: IImage;
  link: string;
  isLink?: boolean;
}

/**
 * A card with info about a donation method
 *
 * @return {*}  {JSX.Element}
 */
const DonationMethod: React.FC<Props> = (props): JSX.Element => {
  return (
    <article
      tabIndex={0}
      title={`Donate in ${props.name}`}
      className="donation-method hover-animation"
      style={{ backgroundImage: `url('${props.image.src}')` }}
    >
      <div className="donation-method__content">
        <Subtitle className="donation-method__name">{props.name}</Subtitle>
        <p tabIndex={0} className="donation-method__comment">
          {props.comment}
        </p>
        <div className="donation-method__link-container">
          {props.isLink ? (
            <a
              href={props.link}
              rel="noopener"
              className="donation-method__link"
            >
              {props.link}
            </a>
          ) : (
            <div className="donation-method__link">{props.link}</div>
          )}
        </div>
      </div>
    </article>
  );
};

export default DonationMethod;
