import React from "react";

import "./ContactLink.scss";

interface Props {
  name: string;
  url: string;
}

const ContactLink: React.FC<Props> = (props) => {
  return (
    <a
      href={props.url}
      rel="noopener"
      className="contact-link hover-animation"
    >
      {props.name}
    </a>
  );
};

export default ContactLink;
