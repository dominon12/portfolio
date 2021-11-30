import React from "react";

import Loading from "../Molecules/Loading";

interface Props {
  isLoading: boolean;
}

/**
 * Shows loading animation if 'isLoading' param is set to true.
 * In other cases shows it's children
 */
const LoadingTemplate: React.FC<Props> = (props) => {
  if (props.isLoading) {
    return <Loading />;
  }

  return <>{props.children}</>;
};

export default LoadingTemplate;
