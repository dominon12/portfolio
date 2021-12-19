import React from "react";

import Loading from "../Molecules/Loading";
import ConnectionError from "../Organisms/ConnectionError";

interface Props {
  render: () => JSX.Element | null;
  pending: boolean;
  error: any;
}

/**
 * Shows a spinner if 'pending';
 * Shows an error component if an error occurred;
 * Shows data if none of previous conditions are truthy.
 *
 * @return {*}  {JSX.Element}
 */
const ApiResponseTemplate: React.FC<Props> = (props): JSX.Element => {
  if (props.pending) {
    return <Loading />;
  }

  if (props.error) {
    return <ConnectionError />;
  }

  return props.render() || <></>;
};

export default ApiResponseTemplate;
