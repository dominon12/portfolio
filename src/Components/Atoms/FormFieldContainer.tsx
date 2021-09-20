import React from "react";

import "./FormFieldContainer.scss";

const FormFieldContainer: React.FC = (props) => {
  return <div className="form-field-container">{props.children}</div>;
};

export default FormFieldContainer;
