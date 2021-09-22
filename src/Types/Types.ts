import { IconType } from "react-icons";

export interface Portfolio {
  about: About;
  projects: Project[];
  technologies: TechnologiesGroup[];
}

export interface About {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  dateStarted: Date;
  type: "Bot" | "Web app" | "REST API" | "E-commerce" | "Landing";
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

export interface TechnologiesGroup {
  id: number;
  name: string;
  technologies: Technology[];
}

export interface Technology {
  id: number;
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}

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
