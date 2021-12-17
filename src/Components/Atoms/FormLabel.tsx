import React from "react";

import "./FormLabel.scss";

interface Props {
  formFieldId: string;
  required?: boolean;
}

/**
 * Form field label.
 *
 * Renders red '*' if 'required' prop
 * is set to true.
 *
 * @return {*}  {JSX.Element}
 */
const FormLabel: React.FC<Props> = (props): JSX.Element => {
  return (
    <label
      htmlFor={props.formFieldId}
      className={`form-label ${props.required && "required"}`}
    >
      {props.children}
    </label>
  );
};

export default FormLabel;
