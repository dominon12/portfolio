import React from "react";

import SubmitErrorForm from "../Organisms/SubmitErrorForm";
import ErrorTemplate from "../Templates/ErrorTemplate";

/**
 * Page with info about an error and
 * a form to send a feedback about this error
 *
 * @return {*}  {JSX.Element}
 */
const RuntimeError: React.FC = (): JSX.Element => {
  return (
    <ErrorTemplate
      title="Oops.."
      description="This app has crashed. Please describe what happened using the form below if you can, so I could fix it faster."
      seoTitle="Runtime Error"
      seoDescription="This app has crashed"
    >
      <SubmitErrorForm />
    </ErrorTemplate>
  );
};

export default RuntimeError;
