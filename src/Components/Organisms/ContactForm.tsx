import React, { useEffect, useState } from "react";

import "./ContactForm.scss";
import Button from "../Atoms/Button";
import Input from "../Molecules/Input";
import Textarea from "../Molecules/Textarea";
import Loading from "../Molecules/Loading";
import Subtitle from "../Atoms/Subtitle";
import { sendContactRequestMessage } from "../../Services/TelegramBotService";
import { emailRegexp, nameRegexp } from "../../Services/FormService";

/**
 * Interactive contact form which shows loading
 * animation and text feedback instead of form
 * after form submission and a form before those actions
 *
 * @return {*} {JSX.Element}
 */
const ContactForm: React.FC = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [isErrorHappened, setIsErrorHappened] = useState(false);

  /**
   * Checks whether 'email' and 'name' values
   * correspond to corresponding regular expressions
   * and sets 'isValid' to true in case of passed tests.
   *
   * If on of the tests will fail, sets 'isValid' to false
   *
   * @return {*}  {void}
   */
  function validateForm(): void {
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

  /**
   * Invokes 'validateForm' function on
   * every 'email' and 'name' values change
   */
  useEffect(() => validateForm(), [email, name]);

  /**
   * If the form is valid, sends form's data
   * using telegram bot service.
   *
   * In the other case sets 'isErrorHappened' to true
   * so the component will show an error message.
   */
  const handleFormSubmit = async () => {
    if (isValid) {
      setIsLoading(true);
      const success = await sendContactRequestMessage(name, email, comment);
      success ? setIsRequestSent(true) : setIsErrorHappened(true);
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  /**
   * Recovers default state values
   */
  const cleanForm = (): void => {
    setName("");
    setEmail("");
    setComment("");
    setIsRequestSent(false);
    setIsErrorHappened(false);
  };

  /**
   * Returns an element with info
   * that the form has been successfully submitted
   *
   * @return {*}  {JSX.Element}
   */
  const requestSent = (): JSX.Element => (
    <div className="contact-form__status">
      <Subtitle className="contact-form__status_title">
        Your contact request has been successfully sent ✅
      </Subtitle>
      <Button type="primary" onClick={cleanForm}>
        Fill again
      </Button>
    </div>
  );

  /**
   * Returns an element which indicates
   * failed form submission
   *
   * @return {*}  {JSX.Element}
   */
  const errorHappened = (): JSX.Element => (
    <div className="contact-form__status">
      <Subtitle className="contact-form__status_title">
        An error occurred.
      </Subtitle>
      <Button type="primary" onClick={cleanForm}>
        Fill again
      </Button>
    </div>
  );

  /**
   * Renders contact form with a submit button
   *
   * @return {*}  {JSX.Element}
   */
  const form = (): JSX.Element => (
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
