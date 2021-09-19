import { IconType } from "react-icons";

export interface Portfolio {
  about: About;
}

export interface About {
  title: string;
  description: string;
  image: string;
}

export interface Tab {
  id: number;
  link: string;
  icon: IconType;
  title: string;
  isActive: boolean;
}
