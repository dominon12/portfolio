import React from "react";

import "./Contact.scss";
import contactIllustration from "../../Assets/Images/contact.png";
import InfoSection from "../Organisms/InfoSection";
import Title from "../Atoms/Title";
import Image from "../Atoms/Image";
import ContactForm from "../Organisms/ContactForm";
import LinksColumn from "../Organisms/LinksColumn";
import Divider from "../Atoms/Divider";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <InfoSection
        containerClassName="contact__form-section"
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

      <Divider>Or</Divider>

      <LinksColumn />
    </div>
  );
};

export default Contact;
