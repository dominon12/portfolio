import React from "react";
import { useHistory } from "react-router";

import "./NotFound.scss";
import NotFoundIllustration from "../../Assets/Images/System/404.png";
import InfoSection from "../Organisms/InfoSection";
import Title from "../Atoms/Title";
import Button from "../Atoms/Button";
import Image from "../Atoms/Image";

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <InfoSection
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
          <Image
            className="not-found__illustration"
            src={NotFoundIllustration}
            alt="Not found illustration"
            height="500"
            width="500"
          />
        </>
      }
    />
  );
};

export default NotFound;
