import React from "react";

import "./DonationMethod.scss";
import { DonationMethodType } from "../../Types/Types";
import Subtitle from "../Atoms/Subtitle";

interface Props {
  name: string;
  type: DonationMethodType;
  linkUrl: string;
  comment: string;
  isLink?: boolean;
}

const typesImages = {
  btc: "https://www.coinopsy.com/media/img/quality_logo/bitcoin-btc.png",
  eth: "https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg",
  tinkoff:
    "https://schoolofthefuture.ru/wp-content/uploads/2019/10/tinkoff-bank-general-logo-.png",
  buymeacoffee:
    "https://uploads-ssl.webflow.com/5d6ebc7749e1415363684547/5d6ebc7749e1413246684553_coffee-cup.svg",
};

const DonationMethod: React.FC<Props> = (props) => {
  return (
    <article
      className="donation-method hover-animation"
      style={{ backgroundImage: `url('${typesImages[props.type]}')` }}
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
