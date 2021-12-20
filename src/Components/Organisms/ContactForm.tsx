import React, { useContext, useEffect, useState } from "react";

import "./ContactForm.scss";
import Button from "../Atoms/Button";
import Input from "../Molecules/Input";
import Textarea from "../Molecules/Textarea";
import { emailRegexp, nameRegexp } from "../../Services/FormService";
import { SnackBarContext } from "../../Contexts/SnackBarContext";
import { useDispatch } from "react-redux";
import { sendContactRequest } from "../../Redux/Contact/Actions";

/**
 * Interactive contact form which shows loading
 * animation and sends snackbar message feedback
 * after form submission.
 *
 * @return {*} {JSX.Element}
 */
const ContactForm: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
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
    dispatch(
      sendContactRequest(
        { name, email, comment },
        setIsLoading,
        sendMessage,
        cleanForm
      )
    );
  };

  return (
    <div className="contact-form">
      <form className="contact-form__form">
        <Input
          id="contact-form-name"
          value={name}
          handleChange={setName}
          label="Your name"
          placeholder="Your name"
          regexp={nameRegexp}
          disabled={isLoading}
          required
        />
        <Input
          id="contact-form-email"
          value={email}
          handleChange={setEmail}
          label="Email"
          placeholder="Email"
          regexp={emailRegexp}
          disabled={isLoading}
          type="email"
          required
        />
        <Textarea
          id="contact-form-comment"
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
