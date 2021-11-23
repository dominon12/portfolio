import React from "react";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";

import "./NotFound.scss";
import NotFoundIllustration from "../../Assets/Images/System/404.png";
import InfoSection from "../Templates/InfoSection";
import Title from "../Atoms/Title";
import Button from "../Atoms/Button";

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>404 Not Found | Dominon12</title>
        <meta
          name="description"
          content="Looks like the page can't be found. Maybe it was moved or renamed."
        />
      </Helmet>
      <InfoSection
        containerClassName="not-found"
        left={
          <>
            <Title className="not-found__title">It's Empty Here</Title>
            <p className="not-found__description">
              Looks like the page can't be found. Maybe it was moved or renamed.
            </p>
            <Button type="primary" onClick={() => history.push("/about")}>
              Homepage
            </Button>
          </>
        }
        right={
          <>
            <img
              className="not-found__illustration"
              src={NotFoundIllustration}
              alt="Not found illustration"
              height="500"
              width="500"
            />
          </>
        }
      />
    </>
  );
};

export default NotFound;
