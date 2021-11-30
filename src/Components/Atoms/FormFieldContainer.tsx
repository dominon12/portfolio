import React from "react";

import "./FormFieldContainer.scss";

/**
 * Container for a form field
 *
 * @return {*}  {JSX.Element}
 */
const FormFieldContainer: React.FC = (props): JSX.Element => {
  return <div className="form-field-container">{props.children}</div>;
};

export default FormFieldContainer;
