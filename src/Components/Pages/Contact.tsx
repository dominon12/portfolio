import React from "react";
import { TiMessageTyping } from "react-icons/ti";

import "./Contact.scss";
import InfoSection from "../Organisms/InfoSection";
import Title from "../Atoms/Title";
import ContactForm from "../Organisms/ContactForm";
import LinksColumn from "../Organisms/LinksColumn";
import Divider from "../Atoms/Divider";

const Contact: React.FC = () => {
  return (
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
  );
};

export default Contact;
