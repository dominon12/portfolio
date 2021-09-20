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
