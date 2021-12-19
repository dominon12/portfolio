import { Profile } from "./../../Types/ApiTypes";

export enum AboutActionTypes {
  FETCHING = "ABOUT_FETCHING",
  SUCCESS = "ABOUT_SUCCESS",
  FAILURE = "ABOUT_FAILURE",
}

export type AboutFetchingAction = () => {
  type: AboutActionTypes.FETCHING;
};

export type AboutSuccessAction = (payload: Profile) => {
  type: AboutActionTypes.SUCCESS;
  payload: Profile;
};

export type AboutFailureAction = (payload: unknown) => {
  type: AboutActionTypes.FAILURE;
  payload: unknown;
};

export type AboutAction = ReturnType<
  AboutFetchingAction | AboutSuccessAction | AboutFailureAction
>;
