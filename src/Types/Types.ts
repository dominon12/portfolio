import { IconType } from "react-icons";

/*
PORTFOLIO
*/

export interface Portfolio {
  about: About;
  projects: Project[];
  skills: SkillsGroup[];
  experience: CareerEvent[];
  languages: Language[];
  contactLinks: ContactLink[];
  donationMethods: DonationMethod[];
}

export interface About {
  title: string;
  description: string;
  image: string;
}

export type ProjectType =
  | "Bot"
  | "Web app"
  | "REST API"
  | "E-commerce"
  | "Landing"
  | "Library";

export interface Project {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  dateStarted: Date;
  type: ProjectType;
  technologies: ProjectTechnologies;
  implementationTime: number;
  repository?: string;
  link?: string;
}

export interface ProjectTechnologies {
  backend: string[];
  frontend: string[];
  devops: string[];
}

export interface SkillsGroup {
  id: number;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: number;
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface CareerEvent {
  id: number;
  title: string;
  description: string;
  date: Date;
  place: string;
  isRelevant: boolean;
}

export interface Language {
  id: number;
  name: string;
  code: string;
  level: string;
  learningStory: string;
}

export interface ContactLink {
  id: number;
  name: string;
  url: string;
}

export type DonationMethodType = "btc" | "eth" | "tinkoff" | "buymeacoffee";

export interface DonationMethod {
  id: number;
  type: DonationMethodType;
  comment: string;
  name: string;
  linkUrl: string;
  isLink?: boolean;
}

/*
OTHER
*/

export interface Tab {
  id: number;
  link: string;
  icon: IconType;
  title: string;
  isActive: boolean;
  orderNumber: number;
}

export interface SelectValue {
  id: number;
  value: string | number;
  displayValue: string;
}

export interface SelectValuesGroup {
  id: number;
  groupName: string;
  values: SelectValue[];
}
