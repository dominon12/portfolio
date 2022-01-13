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
 * Button
 *
 * @export
 * @interface IButton
 */
export interface IButton {
  text: string;
  link: string;
}

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
