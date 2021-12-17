import { IImage } from "./SystemTypes";

export interface Profile {
  firstName: string;
  lastName: string;
  jobTitle: string;
  nickname: string;
  cvDescription: string;
  photo: IImage;
}

export interface ApiResponse<T> {
  status: number;
  data: T;
}
