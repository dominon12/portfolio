import React from "react";

import Loading from "../Molecules/Loading";

interface Props {
  isLoading: boolean;
}

const LoadingTemplate: React.FC<Props> = (props) => {
  if (props.isLoading) {
    return <Loading />;
  }

  return <>{props.children}</>;
};

export default LoadingTemplate;
