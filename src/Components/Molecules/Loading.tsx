import React from "react";
import * as reactSpinners from "react-spinners";

import "./Loading.scss";

const LOADERS = Object.values(reactSpinners);

/**
 * Renders random loader
 *
 * @return {*}  {JSX.Element}
 */
const Loading: React.FC = (): JSX.Element => {
  const RandomLoader: any = LOADERS[Math.floor(Math.random() * LOADERS.length)];
  const colorDetails = getComputedStyle(document.body).getPropertyValue(
    "--color-details"
  );

  return (
    <div className="loading">
      <RandomLoader color={colorDetails} loading={true} />
    </div>
  );
};

export default Loading;
