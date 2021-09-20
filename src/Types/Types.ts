import { IconType } from "react-icons";

export interface Portfolio {
  about: About;
  projects: Project[];
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
  dateStarted: string;
  type: "Bot" | "Web app" | "REST API";
  technologies: ProjectTechnologies;
  repository?: string;
  link?: string;
}

export interface ProjectTechnologies {
  backend?: string[];
  frontend?: string[];
  devops?: string[];
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
