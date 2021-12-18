import {
  CareerActionTypes,
  CareerFailureAction,
  CareerFetchingAction,
  CareerSuccessAction,
} from "./Types";

export const careerFetching: CareerFetchingAction = () => ({
  type: CareerActionTypes.FETCHING,
});

export const careerSuccess: CareerSuccessAction = (payload) => ({
  type: CareerActionTypes.SUCCESS,
  payload,
});

export const careerFailure: CareerFailureAction = (payload) => ({
  type: CareerActionTypes.FAILURE,
  payload,
});
