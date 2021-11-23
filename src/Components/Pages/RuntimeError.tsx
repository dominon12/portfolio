import React, { useState } from "react";

import NotFoundIllustration from "../../Assets/Images/System/404.png";
import { submitErrorFeedback } from "../../Services/TelegramBotService";
import Button from "../Atoms/Button";
import Subtitle from "../Atoms/Subtitle";
import Textarea from "../Molecules/Textarea";
import ErrorTemplate from "../Templates/ErrorTemplate";
import LoadingTemplate from "../Templates/LoadingTemplate";

const RuntimeError = () => {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [onSubmitText, setOnSubmitText] = useState("");

  const reportErrorFeedback = async () => {
    setSubmitted(true);
    setIsLoading(true);

    const success = await submitErrorFeedback(comment);

    if (success) {
      setOnSubmitText("Thank you for feedback!");
    } else {
      setOnSubmitText("Something went wrong :(");
    }

    setTimeout(() => {
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
      seoTitle="404 Not Found | Dominon12"
      seoDescription="This app has crashed"
    >
      {!submitted && (
        <>
          <Textarea
            value={comment}
            placeholder="What happened?"
            label="Feedback"
            handleChange={setComment}
          />
          <Button type="primary" onClick={reportErrorFeedback}>
            Submit
          </Button>
        </>
      )}
      
      <LoadingTemplate isLoading={isLoading}>
        <Subtitle>{onSubmitText}</Subtitle>
      </LoadingTemplate>
    </ErrorTemplate>
  );
};

export default RuntimeError;
