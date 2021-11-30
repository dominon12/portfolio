import React from "react";
import { useHistory } from "react-router";

import NotFoundIllustration from "../../Assets/Images/System/404.png";
import Button from "../Atoms/Button";
import ErrorTemplate from "../Templates/ErrorTemplate";

/**
 * Not found page
 *
 * @return {*}  {JSX.Element}
 */
const NotFound: React.FC = (): JSX.Element => {
  const history = useHistory();

  return (
    <ErrorTemplate
      title="It's Empty Here"
      description="Looks like the page can't be found. Maybe it was moved or renamed."
      image={{
        src: NotFoundIllustration,
        alt: "Not found illustration",
        width: "500",
        height: "500",
      }}
      seoTitle="404 Not Found"
      seoDescription="Looks like the page can't be found. Maybe it was moved or renamed."
    >
      <Button type="primary" onClick={() => history.push("/about")}>
        Homepage
      </Button>
    </ErrorTemplate>
  );
};

export default NotFound;
