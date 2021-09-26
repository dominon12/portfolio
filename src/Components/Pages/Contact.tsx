import React from "react";

import "./Contact.scss";
import contactIllustration from "../../Assets/Images/contact.png";
import InfoSection from "../Organisms/InfoSection";
import Title from "../Atoms/Title";
import Image from "../Atoms/Image";
import ContactForm from "../Organisms/ContactForm";

const Contact: React.FC = () => {
  return (
    <InfoSection
      right={
        <Image
          className="contact__illustration"
          src={contactIllustration}
          alt="Get in contact"
          width="500"
          height="500"
        />
      }
      left={
        <>
          <Title className="contact__title">Contact me</Title>
          <ContactForm />
        </>
      }
      leftContainerClassName="contact__form-container"
    />
  );
};

export default Contact;
