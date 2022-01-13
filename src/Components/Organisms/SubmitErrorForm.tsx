import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import "./SubmitErrorForm.scss";
import { SnackBarContext } from "../../Contexts/SnackBarContext";
import { submitError } from "../../Redux/Errors/Actions";
import { checkFormValid } from "../../Services/FormService";
import Button from "../Atoms/Button";
import Textarea from "../Molecules/Textarea";

/**
 * A form to submit a feedback
 * about an error.
 *
 * @return {*}  {JSX.Element}
 */
const SubmitErrorForm: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { sendMessage } = useContext(SnackBarContext);

  const [comment, setComment] = useState("");
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Checks whether the form
   * is valid and sets isValid
   * state variable.
   *
   */
  const validateForm = () => {
    const valid = checkFormValid([commentInputRef]);
    setIsValid(valid);
  };

  useEffect(() => validateForm(), [comment]);

  /**
   * Clears the form.
   */
  const clearForm = () => {
    setComment("");
  };

  /**
   * Handles form submission flow
   */
  const reportErrorFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    // prevent page from reloading
    e.preventDefault();
    // dispatch saga action
    dispatch(submitError({ comment }, setIsLoading, sendMessage));
    // clean form
    clearForm();
  };

  return (
    <form className="submit-error-form" onSubmit={reportErrorFeedback}>
      <Textarea
        id="error-comment"
        ref={commentInputRef}
        value={comment}
        placeholder="What happened?"
        label="Feedback"
        setValue={setComment}
        disabled={isLoading}
        validationOptions={{ minLength: 25 }}
        required
      />
      <Button type="primary" isLoading={isLoading} disabled={!isValid}>
        Submit
      </Button>
    </form>
  );
};

export default SubmitErrorForm;
