import { IconType } from "react-icons";

/**
 * Menu tab
 *
 * @export
 * @interface ITab
 */
export interface ITab {
  id: number;
  link: string;
  icon: IconType;
  title: string;
  isActive: boolean;
  orderNumber: number;
}

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
 * button types
 */
export type ButtonType = "primary" | "mini";

/**
 * Button
 *
 * @export
 * @interface IButton
 */
export interface IButton {
  text: string;
  type: ButtonType;
  link: string;
}
// TODO remove ButtonType

/**
 * Image representation
 *
 * @export
 * @interface IImage
 */
export interface IImage {
  src: string;
  alt: string;
  width: string;
  height: string;
}