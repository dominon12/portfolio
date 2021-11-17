import React, { useState } from "react";

import "./Select.scss";
import FormError from "../Atoms/FormError";
import { ISelectValue, ISelectValuesGroup } from "../../Types/Types";
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

const Select: React.FC<Props> = ({
  label,
  value,
  values,
  required,
  handleChange,
}) => {
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(true);
  const [errMessage, setErrMessage] = useState<string | null>(null);

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

  const isSelectValuesGroup = (object: any): object is ISelectValuesGroup =>
    "groupName" in object;

  const renderSelectOptions = (selectValues: any) => {
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
    } else {
      // SelectValue
      return selectValues.map((value: ISelectValue) => (
        <option key={value.id} value={value.value}>
          {value.displayValue}
        </option>
      ));
    }
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
