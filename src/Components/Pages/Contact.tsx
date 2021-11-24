import React from "react";
import { TiMessageTyping } from "react-icons/ti";
import { Helmet } from "react-helmet";

import "./Contact.scss";
import InfoSection from "../Templates/InfoSection";
import Title from "../Atoms/Title";
import ContactForm from "../Organisms/ContactForm";
import LinksColumn from "../Molecules/LinksColumn";
import Divider from "../Atoms/Divider";

/**
 * Contact page with a contact form
 * and a list of links to social networks
 *
 * @return {*}  {JSX.Element}
 */
const Contact: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Contact | Dominon12</title>
        <meta
          name="description"
          content="Contact me by filling the form or by clicking one of the contact links below the contact form."
        />
      </Helmet>

      <div className="contact">
        <InfoSection
          containerClassName="contact__form-section"
          right={<TiMessageTyping className="contact__icon" />}
          left={
            <>
              <Title className="contact__title">Contact me</Title>
              <ContactForm />
            </>
          }
          leftContainerClassName="contact__form-container"
        />

        <Divider>Or</Divider>

        <LinksColumn />
      </div>
    </>
  );
};

export default Contact;
