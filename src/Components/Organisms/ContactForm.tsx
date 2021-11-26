import React, { useContext, useEffect, useState } from "react";

import "./ContactForm.scss";
import Button from "../Atoms/Button";
import Input from "../Molecules/Input";
import Textarea from "../Molecules/Textarea";
import { sendContactRequestMessage } from "../../Services/TelegramBotService";
import { emailRegexp, nameRegexp } from "../../Services/FormService";
import {
  SnackBarContext,
  SnackBarMessageColor,
} from "../../Contexts/SnackBarContext";

/**
 * Interactive contact form which shows loading
 * animation and sends snackbar message feedback 
 * after form submission.
 *
 * @return {*} {JSX.Element}
 */
const ContactForm: React.FC = (): JSX.Element => {
  const { sendMessage } = useContext(SnackBarContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
   * Recovers default state values
   */
  const cleanForm = (): void => {
    setName("");
    setEmail("");
    setComment("");
  };

  /**
   * Handles form submission process,
   * setting state variables and showing
   * snackbar messages.
   */
  const handleFormSubmit = async () => {
    if (isValid) {
      setIsLoading(true);
      const success = await sendContactRequestMessage(name, email, comment);

      setTimeout(() => {
        if (success) {
          sendMessage(
            "Your contact request has been successfully sent! I will contact you ASAP.",
            { color: SnackBarMessageColor.SUCCESS }
          );
        } else {
          sendMessage(
            "Something sent wrong. Please try again later or contact me via links below.",
            { color: SnackBarMessageColor.DANGER }
          );
        }

        cleanForm();
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <div className="contact-form">
      <form className="contact-form__form">
        <Input
          value={name}
          handleChange={setName}
          label="Your name"
          placeholder="Your name"
          regexp={nameRegexp}
          disabled={isLoading}
          required
        />
        <Input
          value={email}
          handleChange={setEmail}
          label="Email"
          placeholder="Email"
          regexp={emailRegexp}
          disabled={isLoading}
          required
        />
        <Textarea
          value={comment}
          handleChange={setComment}
          label="Comment"
          placeholder="Comment"
          disabled={isLoading}
        />
      </form>
      <Button
        type="primary"
        onClick={handleFormSubmit}
        disabled={!isValid}
        isLoading={isLoading}
      >
        Submit
      </Button>
    </div>
  );
};

export default ContactForm;
