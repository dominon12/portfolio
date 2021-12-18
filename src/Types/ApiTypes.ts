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
}

export interface TechGroup {
  pk: number;
  name: string;
  skills: Technology[];
}
