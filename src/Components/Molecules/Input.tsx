import React, { forwardRef, useState } from "react";

import FormFieldContainer from "../Atoms/FormFieldContainer";
import FormLabel from "../Atoms/FormLabel";
import FormError from "../Atoms/FormError";
import { validateField } from "../../Services/FormService";

interface Props {
  id: string;
  value: string;
  placeholder?: string;
  label?: string;
  type?: string;
  handleChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  regexp?: RegExp;
}

/**
 * Input form field element with validation
 * and ref forwarding support.
 *
 * @return {*}  {JSX.Element}
 */
const Input = forwardRef<HTMLInputElement, Props>((props, ref): JSX.Element => {
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(true);
  const [errMessage, setErrMessage] = useState<string | null>(null);

  /**
   * Proxy function for set state action.
   *
   * Validates value and sets 'valid' value
   *
   * After first invocation, sets 'touched' value to true
   * in order to indicate that the field was touched
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - field's onChange event
   */
  const handleInputValueChangesFlow = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let instantTouched = touched;
    if (!touched) {
      setTouched(true);
      instantTouched = true;
    }

    props.handleChange && props.handleChange(e.target.value);

    props.required &&
      instantTouched &&
      validateField(
        e.target.value,
        valid,
        errMessage,
        setValid,
        setErrMessage,
        { validateEmptyField: true, validateRegExp: true, regexp: props.regexp }
      );
  };

  return (
    <FormFieldContainer>
      {props.label && (
        <FormLabel formFieldId={props.id} required={props.required}>
          {props.label}
        </FormLabel>
      )}

      <input
        ref={ref}
        id={props.id}
        className={`form-field ${
          touched ? (valid ? "valid" : "invalid") : "untouched"
        }`}
        value={props.value}
        type={props.type ?? "text"}
        onChange={handleInputValueChangesFlow}
        placeholder={props.placeholder ?? ""}
        disabled={props.disabled}
      />

      {touched && !valid && errMessage && <FormError>{errMessage}</FormError>}
    </FormFieldContainer>
  );
});

export default Input;
