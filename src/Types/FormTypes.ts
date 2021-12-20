/**
 * Representation of 'Select' component's value
 *
 * @export
 * @interface ISelectValue
 */
export interface ISelectValue {
  id: number;
  value: string | number;
  displayValue: string;
}

/**
 * Representation of a group of values to use with Select component
 *
 * @export
 * @interface ISelectValuesGroup
 */
export interface ISelectValuesGroup {
  id: number;
  groupName: string;
  values: ISelectValue[];
}

/**
 * Represents validation options.
 *
 * @export
 * @interface ValidationOptions
 */
export interface ValidationOptions {
  toBeEqualTo?: ToBeEqualValidation;
  includeUppercaseLetters?: boolean;
  minLength?: number;
  maxLength?: number;
  regexp?: RegExp;
}

/**
 * To be equal validation
 *
 * @export
 * @interface ToBeEqualValidation
 */
export interface ToBeEqualValidation {
  valueToBeEqualTo: string;
  valueName: string;
}
