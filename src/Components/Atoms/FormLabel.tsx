import React from "react";

import "./FormLabel.scss";

interface Props {
  required?: boolean;
}

const FormLabel: React.FC<Props> = (props) => {
  return (
    <label className={`form-label ${props.required && "required"}`}>
      {props.children}
    </label>
  );
};

export default FormLabel;
