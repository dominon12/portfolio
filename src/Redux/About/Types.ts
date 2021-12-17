import { Profile } from "./../../Types/ApiTypes";

export enum AboutActionTypes {
  ABOUT_FETCHING = "ABOUT_FETCHING",
  ABOUT_SUCCESS = "ABOUT_SUCCESS",
  ABOUT_FAILURE = "ABOUT_FAILURE",
}

export interface AboutFetchingAction {
  type: AboutActionTypes.ABOUT_FETCHING;
}

export interface AboutSuccessAction {
  type: AboutActionTypes.ABOUT_SUCCESS;
  payload: Profile;
}

export interface AboutFailureAction {
  type: AboutActionTypes.ABOUT_FAILURE;
  payload: unknown;
}

export type AboutAction =
  | AboutFetchingAction
  | AboutSuccessAction
  | AboutFailureAction;
