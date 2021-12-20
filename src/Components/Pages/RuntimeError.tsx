import React, { useContext, useState } from "react";

import NotFoundIllustration from "../../Assets/Images/System/404.png";
import {
  SnackBarContext,
  SnackBarMessageColor,
} from "../../Contexts/SnackBarContext";
import { submitErrorFeedback } from "../../Services/TelegramBotService";
import Button from "../Atoms/Button";
import Textarea from "../Molecules/Textarea";
import ErrorTemplate from "../Templates/ErrorTemplate";

/**
 * Page with info about an error and
 * a form to send a feedback about this error
 *
 * @return {*}  {JSX.Element}
 */
const RuntimeError = (): JSX.Element => {
  const { sendMessage } = useContext(SnackBarContext);

  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handles form submission flow
   */
  const reportErrorFeedback = async () => {
    setIsLoading(true);

    const success = await submitErrorFeedback(comment);

    setTimeout(() => {
      if (success) {
        sendMessage(
          "Thank you for feedback! Thanks to you I will fix this error faster!",
          {
            color: SnackBarMessageColor.SUCCESS,
          }
        );
      } else {
        sendMessage(
          "Something went wrong :( Please try again later or contact me via the Contact page",
          {
            color: SnackBarMessageColor.DANGER,
            delay: 5000,
          }
        );
      }
      setComment("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ErrorTemplate
      title="Oops.."
      description="This app has crashed. Please describe what happened using the form below if you can, so I could fix it faster."
      image={{
        src: NotFoundIllustration,
        alt: "Error illustration",
        width: "500",
        height: "500",
      }}
      seoTitle="Runtime Error"
      seoDescription="This app has crashed"
    >
      <Textarea
        id="error-comment"
        value={comment}
        placeholder="What happened?"
        label="Feedback"
        setValue={setComment}
        disabled={isLoading}
      />
      <Button
        type="primary"
        onClick={reportErrorFeedback}
        isLoading={isLoading}
      >
        Submit
      </Button>
    </ErrorTemplate>
  );
};

export default RuntimeError;
