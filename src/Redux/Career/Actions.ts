import {
  CareerActionTypes,
  CareerFailureAction,
  CareerFetchAction,
  CareerSuccessAction,
} from "./Types";

export const fetchCareerEvents: CareerFetchAction = () => ({
  type: CareerActionTypes.FETCH,
});

export const careerSuccess: CareerSuccessAction = (payload) => ({
  type: CareerActionTypes.SUCCESS,
  payload,
});

export const careerFailure: CareerFailureAction = (payload) => ({
  type: CareerActionTypes.FAILURE,
  payload,
});
