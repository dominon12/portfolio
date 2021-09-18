import React, { useEffect } from "react";
import LazyLoad, { forceCheck } from "react-lazyload";

interface Props {
  src: string;
  alt: string;
  width: string;
  height: string;
  className?: string;
}

const Image: React.FC<Props> = (props) => {
  useEffect(() => {
    setTimeout(forceCheck, 50);
  }, []);

  return (
    <LazyLoad height={250} offset={100} once>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={props.className}
      />
    </LazyLoad>
  );
};

export default Image;
