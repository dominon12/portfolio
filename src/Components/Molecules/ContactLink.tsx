import React from "react";

import "./ContactLink.scss";

interface Props {
  name: string;
  link: string;
}

/**
 * Beautiful link
 *
 * @return {*}  {JSX.Element}
 */
const ContactLink: React.FC<Props> = (props): JSX.Element => {
  return (
    <a
      href={props.link}
      rel="noopener"
      className="contact-link hover-animation"
    >
      {props.name}
    </a>
  );
};

export default ContactLink;
