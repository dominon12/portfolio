import React from "react";

import "./FormError.scss";

const FormError: React.FC = (props) => {
  return <span className="form-error">{props.children}</span>;
};

export default FormError;
