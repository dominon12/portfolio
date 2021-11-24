/**
 * Module contains functions to work with forms
 */

/**
 * Validates a form field's value based on passed 'options' param
 * 
 * @param formValue value of the form field
 * @param valid indicates wether the field is valid
 * @param errMessage value of a previous error message produced by this function
 * @param setValid set state action for 'valid' param
 * @param setErrMessage set state action for 'errMessage' param
 * @param options validation options
 */
export const validateField = (
  formValue: string,
  valid: boolean,
  errMessage: string | null,
  setValid: React.Dispatch<React.SetStateAction<boolean>>,
  setErrMessage: React.Dispatch<React.SetStateAction<string | null>>,
  options?: {
    validateEmptyField?: boolean;
    validateRegExp?: boolean;
    regexp?: RegExp;
  }
) => {
  if (options?.validateEmptyField && !formValue) {
    // no value
    setValid(false);
    setErrMessage("This field is empty");
  } else if (
    options?.validateRegExp &&
    options?.regexp &&
    !options?.regexp.test(formValue)
  ) {
    // doesn't match with RegExp pattern
    setValid(false);
    setErrMessage("Value doesn't match field's pattern");
  } else if (!valid) {
    // valid
    setValid(true);
    if (errMessage) setErrMessage(null);
  }
};
