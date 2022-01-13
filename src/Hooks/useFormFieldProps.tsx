import React, { useState } from "react";

import { validateFormField } from "../Services/FormService";
import { ValidationOptions } from "../Types/FormTypes";

interface Props {
  value: string;
  setValue?: (value: string) => void;
  required?: boolean;
  validationOptions?: ValidationOptions;
}

function useFormFieldProps(props: Props) {
  const [isValid, setIsValid] = useState(true);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [wasTouched, setWasTouched] = useState(false);

  /**
   * Validates form field value
   * based on passed props.
   *
   * @param {string} value - value to validate
   */
  const validateFieldValue = (value: string) => {
    const { valid, errors } = validateFormField(
      value,
      props.validationOptions,
      props.required
    );

    setIsValid(valid);
    setErrorMessages(errors);
  };

  /**
   * Handles process of changing input value.
   * Validates value if it was touched.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - input field event
   */
  const handleChangeInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // set touched
    let instantTouched = wasTouched;
    if (!wasTouched) {
      setWasTouched(true);
      instantTouched = true;
    }
    // set value
    const nextValue = e.target.value;
    props.setValue && props.setValue(nextValue);
    // validate if necessary
    instantTouched && validateFieldValue(nextValue);
  };

  return {
    className: wasTouched ? (isValid ? "valid" : "invalid") : "untouched",
    handleChangeInputValue,
    errorMessages,
    isValid,
  };
}

export default useFormFieldProps;
