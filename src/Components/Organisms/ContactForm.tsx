import React, { useContext, useEffect, useRef, useState } from "react";

import "./ContactForm.scss";
import Button from "../Atoms/Button";
import Input from "../Molecules/Input";
import Textarea from "../Molecules/Textarea";
import {
  checkFormValid,
  emailPattern,
  namePattern,
} from "../../Services/FormService";
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

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Calls helper function to 
   * validate form fields and
   * sets isValid state variable.
   * 
   * @return {*}  {void}
   */
  function validateForm(): void {
    const isValid = checkFormValid([nameInputRef, emailInputRef]);
    setIsValid(isValid);
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
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // prevent page from reloading
    e.preventDefault();
    // dispatch saga action
    dispatch(
      sendContactRequest({ name, email, comment }, setIsLoading, sendMessage)
    );
    // clean form
    cleanForm();
  };

  return (
    <div className="contact-form">
      <form className="contact-form__form" onSubmit={handleFormSubmit}>
        <Input
          id="contact-form-name"
          ref={nameInputRef}
          value={name}
          setValue={setName}
          label="Your name"
          placeholder="Your name"
          disabled={isLoading}
          validationOptions={{ regexp: namePattern }}
          required
        />
        <Input
          id="contact-form-email"
          ref={emailInputRef}
          value={email}
          setValue={setEmail}
          label="Email"
          placeholder="Email"
          disabled={isLoading}
          type="email"
          validationOptions={{ regexp: emailPattern }}
          required
        />
        <Textarea
          id="contact-form-comment"
          value={comment}
          setValue={setComment}
          label="Comment"
          placeholder="Comment"
          disabled={isLoading}
        />
        <Button type="primary" disabled={!isValid} isLoading={isLoading}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
