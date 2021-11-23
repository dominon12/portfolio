import React from "react";
import { useHistory } from "react-router";

import NotFoundIllustration from "../../Assets/Images/System/404.png";
import Button from "../Atoms/Button";
import ErrorTemplate from "../Templates/ErrorTemplate";

const NotFound: React.FC = () => {
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
      seoTitle="404 Not Found | Dominon12"
      seoDescription="Looks like the page can't be found. Maybe it was moved or renamed."
    >
      <Button type="primary" onClick={() => history.push("/about")}>
        Homepage
      </Button>
    </ErrorTemplate>
  );
};

export default NotFound;
