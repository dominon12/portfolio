import { CareerEvent } from "./../../Types/ApiTypes";

export enum CareerActionTypes {
  FETCH = "CAREER_FETCH",
  SUCCESS = "CAREER_SUCCESS",
  FAILURE = "CAREER_FAILURE",
}

export type CareerFetchAction = () => {
  type: CareerActionTypes.FETCH;
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
  | CareerFetchAction
  | CareerSuccessAction
  | CareerFailureAction
>;
