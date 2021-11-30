import React, { useState } from "react";

import "./Select.scss";
import FormError from "../Atoms/FormError";
import { ISelectValue, ISelectValuesGroup } from "../../Types/SystemTypes";
import { validateField } from "../../Services/FormService";
import FormLabel from "../Atoms/FormLabel";
import FormFieldContainer from "../Atoms/FormFieldContainer";

interface Props {
  label: string;
  value: string | number;
  values: ISelectValue[] | ISelectValuesGroup[];
  handleChange: any;
  defaultValue?: string | number;
  required?: boolean;
}

/**
 * Select form fields with validation
 * and possibility to render either normal options
 * list of options list with option groups
 *
 * @return {*}  {JSX.Element}
 */
const Select: React.FC<Props> = ({
  label,
  value,
  values,
  required,
  handleChange,
}): JSX.Element => {
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
   * @param {React.ChangeEvent<HTMLSelectElement>} e - select onChange event
   */
  const handleSelectValueChangesFlow = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let instantTouched;
    if (required) {
      instantTouched = touched; // use a variable because React updates state asynchronously
      if (!touched) {
        setTouched(true);
        instantTouched = true;
      }
    }

    handleChange(e.target.value);

    if (required) {
      instantTouched &&
        validateField(
          e.target.value,
          valid,
          errMessage,
          setValid,
          setErrMessage,
          { validateEmptyField: true }
        );
    }
  };

  /**
   * Returns true if passed object is
   * of ISelectValuesGroup type. In other
   * cases returns false
   *
   * @param {(ISelectValue | ISelectValuesGroup)} object - object to check
   * @return {*}  {boolean}
   */
  const isSelectValuesGroup = (
    object: ISelectValue | ISelectValuesGroup
  ): object is ISelectValuesGroup => "groupName" in object;

  /**
   * Renders select options based on the type
   * of passed 'selectValues' param.
   *
   * If it's of ISelectValue type, it will return
   * a list of 'option' elements.
   *
   * If it's of ISelectValuesGroup type, it will return
   * a list of 'optgroup' elements with 'option' elements
   * inside.
   *
   * @param {(ISelectValue | ISelectValuesGroup)} selectValues
   * @return {*}  {JSX.Element}
   */
  const renderSelectOptions = (selectValues: any): JSX.Element => {
    if (isSelectValuesGroup(selectValues[0])) {
      // SelectValuesGroup
      return selectValues
        .sort(
          (a: ISelectValuesGroup, b: ISelectValuesGroup) =>
            a.values.length - b.values.length
        )
        .map((value: ISelectValuesGroup) => (
          <optgroup key={value.id} label={value.groupName}>
            {renderSelectOptions(value.values)}
          </optgroup>
        ));
    }

    // SelectValue
    return selectValues.map((value: ISelectValue) => (
      <option key={value.id} value={value.value}>
        {value.displayValue}
      </option>
    ));
  };

  return (
    <FormFieldContainer>
      {label && <FormLabel required={required}>{label}</FormLabel>}

      <select
        value={value}
        onChange={handleSelectValueChangesFlow}
        className={`form-field select ${
          touched ? (valid ? "valid" : "invalid") : "untouched"
        }`}
        required={required}
      >
        <option value="">Please choose an option</option>
        {values.length && renderSelectOptions(values)}
      </select>

      {touched && !valid && errMessage && <FormError>{errMessage}</FormError>}
    </FormFieldContainer>
  );
};

export default Select;
