import React from "react";

import "./FormError.scss";

/**
 * Renders small red text, 
 * representing invalid form field's value.
 *
 * @return {*}  {JSX.Element}
 */
const FormError: React.FC = (props): JSX.Element => {
  return <span className="form-error">{props.children}</span>;
};

export default FormError;
