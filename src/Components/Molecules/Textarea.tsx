import React, { forwardRef } from "react";

import FormFieldContainer from "../Atoms/FormFieldContainer";
import FormLabel from "../Atoms/FormLabel";
import FormError from "../Atoms/FormError";
import { ValidationOptions } from "../../Types/FormTypes";
import useFormFieldProps from "../../Hooks/useFormFieldProps";

interface Props {
  id: string;
  value: string;
  setValue?: (value: string) => void;
  placeholder?: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  disabled?: boolean;
  validationOptions?: ValidationOptions;
}

/**
 * Textarea form field with validation
 *
 * @return {*}  {JSX.Element}
 */
const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  (props, ref): JSX.Element => {
    const { className, handleChangeInputValue, errorMessages, isValid } =
      useFormFieldProps({
        value: props.value,
        setValue: props.setValue,
        required: props.required,
        validationOptions: props.validationOptions,
      });

    return (
      <FormFieldContainer>
        {props.label && (
          <FormLabel formFieldId={props.id} required={props.required}>
            {props.label}
          </FormLabel>
        )}

        <textarea
          id={props.id}
          ref={ref}
          className={`form-field ${className}`}
          value={props.value}
          onChange={handleChangeInputValue}
          placeholder={props.placeholder ?? ""}
          disabled={props.disabled}
        />

        {!isValid &&
          errorMessages.map((errMessage, index) => (
            <FormError key={index}>{errMessage}</FormError>
          ))}
      </FormFieldContainer>
    );
  }
);

export default Textarea;
