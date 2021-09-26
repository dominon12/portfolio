import React from "react";
import * as reactSpinners from "react-spinners";

import "./Loading.scss";

const LOADERS = Object.values(reactSpinners);

const Loading: React.FC = () => {
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
