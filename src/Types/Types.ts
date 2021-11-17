import { IconType } from "react-icons";

/*
PORTFOLIO
*/

export interface IPortfolio {
  about: IAbout;
  projects: IProject[];
  skills: ISkillsGroup[];
  experience: ICareerEvent[];
  languages: ILanguage[];
  contactLinks: IContactLink[];
  donationMethods: IDonationMethod[];
}

export interface IAbout {
  cvDescription: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  profilePhoto: IImage;
  aboutUnits: IAboutUnit[];
}

export interface IAboutUnit {
  id: number;
  title: string;
  description: string;
  image: IImage;
  button?: IButton;
}

export type ButtonType = "primary" | "mini";

export interface IButton {
  text: string;
  type: ButtonType;
  link: string;
}

export interface IImage {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export type ProjectType =
  | "Bot"
  | "Web app"
  | "REST API"
  | "E-commerce"
  | "Landing"
  | "Library";

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

export interface IProjectTechnologies {
  backend: string[];
  frontend: string[];
  devops: string[];
}

export interface ISkillsGroup {
  id: number;
  name: string;
  skills: ISkill[];
}

export interface ISkill {
  id: number;
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  isRelevant: boolean;
}

export interface ICareerEvent {
  id: number;
  title: string;
  description: string;
  date: Date;
  place: string;
  isRelevant: boolean;
}

export interface ILanguage {
  id: number;
  name: string;
  code: string;
  level: string;
  learningStory: string;
}

export interface IContactLink {
  id: number;
  name: string;
  url: string;
}

export type DonationMethodType = "btc" | "eth" | "tinkoff" | "buymeacoffee";

export interface IDonationMethod {
  id: number;
  type: DonationMethodType;
  comment: string;
  name: string;
  linkUrl: string;
  image: IImage;
  isLink?: boolean;
}

/*
OTHER
*/

export interface ITab {
  id: number;
  link: string;
  icon: IconType;
  title: string;
  isActive: boolean;
  orderNumber: number;
}

export interface ISelectValue {
  id: number;
  value: string | number;
  displayValue: string;
}

export interface ISelectValuesGroup {
  id: number;
  groupName: string;
  values: ISelectValue[];
}
