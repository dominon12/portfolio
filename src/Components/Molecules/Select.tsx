import React from "react";

import "./Select.scss";
import FormLabel from "../Atoms/FormLabel";
import FormFieldContainer from "../Atoms/FormFieldContainer";
import { ISelectValue, ISelectValuesGroup } from "../../Types/FormTypes";

interface Props {
  id: string;
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
  id,
  label,
  value,
  values,
  required,
  handleChange,
}): JSX.Element => {
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
      return selectValues.map((value: ISelectValuesGroup) => (
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
      {label && (
        <FormLabel formFieldId={id} required={required}>
          {label}
        </FormLabel>
      )}

      <select
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="form-field select"
        required={required}
      >
        <option value="">Please choose an option</option>
        {values.length && renderSelectOptions(values)}
      </select>
    </FormFieldContainer>
  );
};

export default Select;
