import React, { useEffect, useState } from "react";

import "./ContactForm.scss";
import Button from "../Atoms/Button";
import Input from "../Molecules/Input";
import Textarea from "../Molecules/Textarea";
import Loading from "../Molecules/Loading";
import Subtitle from "../Atoms/Subtitle";
import { sendContactRequestMessage } from "../../Services/TelegramBotService";

const emailRegexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegexp = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [isErrorHappened, setIsErrorHappened] = useState(false);

  function validateForm() {
    if (!emailRegexp.test(email)) {
      setIsValid(false);
      return;
    }
    if (!nameRegexp.test(name)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  }

  useEffect(() => validateForm(), [email, name]);

  const handleFormSubmit = async () => {
    if (isValid) {
      setIsLoading(true);
      const success = await sendContactRequestMessage(name, email, comment);
      success ? setIsRequestSent(true) : setIsErrorHappened(true);
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  const cleanForm = () => {
    setName("");
    setEmail("");
    setComment("");
    setIsRequestSent(false);
    setIsErrorHappened(false);
  };

  const requestSent = () => (
    <div className="contact-form__status">
      <Subtitle className="contact-form__status_title">
        Your contact request has been successfully sent ✅
      </Subtitle>
      <Button type="primary" onClick={cleanForm}>
        Fill again
      </Button>
    </div>
  );

  const errorHappened = () => (
    <div className="contact-form__status">
      <Subtitle className="contact-form__status_title">
        An error occurred.
      </Subtitle>
      <Button type="primary" onClick={cleanForm}>
        Fill again
      </Button>
    </div>
  );

  const form = () => (
    <>
      <form className="contact-form__form">
        <Input
          value={name}
          handleChange={setName}
          label="Your name"
          placeholder="Your name"
          regexp={nameRegexp}
          required
        />
        <Input
          value={email}
          handleChange={setEmail}
          label="Email"
          placeholder="Email"
          regexp={emailRegexp}
          required
        />
        <Textarea
          value={comment}
          handleChange={setComment}
          label="Comment"
          placeholder="Comment"
        />
      </form>
      <Button type="primary" onClick={handleFormSubmit} disabled={!isValid}>
        Submit
      </Button>
    </>
  );

  return (
    <div className="contact-form">
      {isLoading ? (
        <Loading />
      ) : isRequestSent ? (
        requestSent()
      ) : isErrorHappened ? (
        errorHappened()
      ) : (
        form()
      )}
    </div>
  );
};

export default ContactForm;
