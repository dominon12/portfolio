import React from "react";

import Loading from "../Molecules/Loading";
import ConnectionError from "../Organisms/ConnectionError";

interface Props {
  renderData: () => JSX.Element | null;
  pending: boolean;
  error: any;
}

const ApiResponseTemplate: React.FC<Props> = (props): JSX.Element => {
  if (props.pending) {
    return <Loading />;
  }

  if (props.error) {
    return <ConnectionError />;
  }

  return props.renderData() || <></>;
};

export default ApiResponseTemplate;
