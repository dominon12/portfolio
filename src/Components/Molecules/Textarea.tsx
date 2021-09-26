import React, { useState } from "react";

import FormFieldContainer from "../Atoms/FormFieldContainer";
import FormLabel from "../Atoms/FormLabel";
import FormError from "../Atoms/FormError";
import { validateField } from "../../Services/FormService";

interface Props {
  value: string;
  placeholder?: string;
  label?: string;
  handleChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  regexp?: RegExp;
}

const Textarea: React.FC<Props> = (props) => {
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(true);
  const [errMessage, setErrMessage] = useState<string | null>(null);

  const handleTextareaValueChangesFlow = (
    e: React.ChangeEvent<HTMLTextAreaElement>
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
        <FormLabel required={props.required}>{props.label}</FormLabel>
      )}

      <textarea
        className={`form-field ${
          touched ? (valid ? "valid" : "invalid") : "untouched"
        }`}
        value={props.value}
        onChange={handleTextareaValueChangesFlow}
        placeholder={props.placeholder ?? ""}
        disabled={props.disabled}
      />

      {touched && !valid && errMessage && <FormError>{errMessage}</FormError>}
    </FormFieldContainer>
  );
};

export default Textarea;
