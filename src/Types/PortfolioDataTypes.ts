/**
 * Contains interfaces and types to
 * represent parts of portfolio
 */

import { IButton, IImage } from "./SystemTypes";

/**
 * Representation of portfolio object
 *
 * @export
 * @interface IPortfolio
 */
export interface IPortfolio {
  about: IAbout;
  projects: IProject[];
  skills: ISkillsGroup[];
  experience: ICareerEvent[];
  languages: ILanguage[];
  contactMethods: IContactMethod[];
  donationMethods: IDonationMethod[];
}

/**
 * Representation of portfolio's about section
 *
 * @export
 * @interface IAbout
 */
export interface IAbout {
  cvDescription: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  profilePhoto: IImage;
  aboutUnits: IAboutUnit[];
}

/**
 * Representation of portfolio's about units
 *
 * @export
 * @interface IAboutUnit
 */
export interface IAboutUnit {
  id: number;
  title: string;
  description: string;
  image: IImage;
  button?: IButton;
}

/**
 * Possible project types
 */
export type ProjectType =
  | "Bot"
  | "Web app"
  | "REST API"
  | "E-commerce"
  | "Landing"
  | "Library";

/**
 * Project representation
 *
 * @export
 * @interface IProject
 */
export interface IProject {
  id: number;
  title: string;
  image: IImage;
  shortDescription: string;
  description: string[];
  dateStarted: Date;
  type: ProjectType;
  technologies: IProjectTechnologies;
  implementationTime: number;
  repository?: string;
  link?: string;
}

/**
 * Representation of technologies used
 * to creat a project
 *
 * @export
 * @interface IProjectTechnologies
 */
export interface IProjectTechnologies {
  backend: string[];
  frontend: string[];
  devops: string[];
}

/**
 * Skills group representation
 *
 * @export
 * @interface ISkillsGroup
 */
export interface ISkillsGroup {
  id: number;
  name: string;
  skills: ISkill[];
}

/**
 * Skill representation
 *
 * @export
 * @interface ISkill
 */
export interface ISkill {
  id: number;
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  isRelevant: boolean;
}

/**
 * Career event representation
 *
 * @export
 * @interface ICareerEvent
 */
export interface ICareerEvent {
  id: number;
  title: string;
  description: string;
  date: Date;
  place: string;
  isRelevant: boolean;
}

/**
 * Language representation
 *
 * @export
 * @interface ILanguage
 */
export interface ILanguage {
  id: number;
  name: string;
  code: string;
  level: string;
  learningStory: string;
}

/**
 * Contact method representation
 *
 * @export
 * @interface IContactMethod
 */
export interface IContactMethod {
  id: number;
  name: string;
  url: string;
}

/**
 * possible donation types
 */
export type DonationMethodType = "btc" | "eth" | "tinkoff" | "buymeacoffee";

/**
 * Donation method representation
 *
 * @export
 * @interface IDonationMethod
 */
export interface IDonationMethod {
  id: number;
  type: DonationMethodType;
  comment: string;
  name: string;
  linkUrl: string;
  image: IImage;
  isLink?: boolean;
}
