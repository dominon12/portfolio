import React from "react";

import NotFoundIllustration from "../../Assets/Images/System/404.png";
import Button from "../Atoms/Button";
import ErrorTemplate from "../Templates/ErrorTemplate";

/**
 * Page with info about an error
 *
 * @return {*}  {JSX.Element}
 */
const ConnectionError = (): JSX.Element => {
  const reloadPage = () => window.location.reload();

  return (
    <ErrorTemplate
      title="Oops.."
      description="This app tried to fetch some data but couldn't do that. Please make sure that you have a stable internet connection and try to reload the page"
      image={{
        src: NotFoundIllustration,
        alt: "Error illustration",
        width: "500",
        height: "500",
      }}
      seoTitle="Connection Error"
      seoDescription="This app has encountered a problem with connection"
    >
      <Button type="primary" onClick={reloadPage}>
        Refresh page
      </Button>
    </ErrorTemplate>
  );
};

export default ConnectionError;
