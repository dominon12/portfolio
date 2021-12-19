import { IButton, IImage } from "./SystemTypes";

export interface Profile {
  firstName: string;
  lastName: string;
  jobTitle: string;
  nickname: string;
  cvDescription: string;
  photo: IImage;
  aboutUnits: AboutUnit[];
}

export interface AboutUnit {
  pk: number;
  title: string;
  description: string;
  image: IImage;
  button: IButton;
}

export interface Project {
  pk: number;
  name: string;
  image: IImage;
  shortDescription: string;
  description: string;
  date: string;
  type: string;
  technologies: Technology[];
  implementationTime: number;
  repository?: string;
  link?: string;
}

export interface PaginatedProjects {
  count: number;
  totalPages: number;
  results: Project[];
}

export interface Technology {
  pk: number;
  techGroup: string;
  name: string;
  level: number;
  isRelevant: boolean;
  showAsFilter: boolean;
}

export interface TechGroup {
  pk: number;
  name: string;
  skills: Technology[];
  showAsSkill: boolean;
}

export interface CareerEvent {
  pk: number;
  title: string;
  description: string;
  date: string;
  place: string;
  isRelevant: boolean;
}

export interface Language {
  pk: number;
  name: string;
  code: string;
  level: string;
  learningHistory: string;
}

export interface DonationMethod {
  pk: number;
  comment: string;
  name: string;
  image: IImage;
  link: string;
  isLink?: boolean;
}

export interface ContactMethod {
  pk: number;
  name: string;
  link: string;
}
