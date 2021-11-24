import React from "react";

import "./DonationMethod.scss";
import { DonationMethodType } from "../../Types/PortfolioDataTypes";
import { IImage } from "../../Types/SystemTypes";
import Subtitle from "../Atoms/Subtitle";

interface Props {
  name: string;
  type: DonationMethodType;
  linkUrl: string;
  comment: string;
  image: IImage;
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
      className="donation-method hover-animation"
      style={{ backgroundImage: `url('${props.image.src}')` }}
    >
      <div className="donation-method__content">
        <Subtitle className="donation-method__name">{props.name}</Subtitle>
        <p className="donation-method__comment">{props.comment}</p>
        <div className="donation-method__link-container">
          {props.isLink ? (
            <a
              href={props.linkUrl}
              rel="noopener"
              className="donation-method__link"
            >
              {props.linkUrl}
            </a>
          ) : (
            <div className="donation-method__link">{props.linkUrl}</div>
          )}
        </div>
      </div>
    </article>
  );
};

export default DonationMethod;
