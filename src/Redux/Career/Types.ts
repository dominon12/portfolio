import { CareerEvent } from "./../../Types/ApiTypes";

export enum CareerActionTypes {
  FETCHING = "CAREER_FETCHING",
  SUCCESS = "CAREER_SUCCESS",
  FAILURE = "CAREER_FAILURE",
}

export type CareerFetchingAction = () => {
  type: CareerActionTypes.FETCHING;
};

export type CareerSuccessAction = (payload: CareerEvent[]) => {
  type: CareerActionTypes.SUCCESS;
  payload: CareerEvent[];
};

export type CareerFailureAction = (payload: unknown) => {
  type: CareerActionTypes.FAILURE;
  payload: unknown;
};

export type CareerAction = ReturnType<
  | CareerFetchingAction
  | CareerSuccessAction
  | CareerFailureAction
>;
