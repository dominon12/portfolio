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
