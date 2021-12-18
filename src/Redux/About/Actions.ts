import {
  AboutActionTypes,
  AboutFailureAction,
  AboutFetchingAction,
  AboutSuccessAction,
} from "./Types";

export const aboutFetching: AboutFetchingAction = () => ({
  type: AboutActionTypes.FETCHING,
});

export const aboutSuccess: AboutSuccessAction = (payload) => ({
  type: AboutActionTypes.SUCCESS,
  payload,
});

export const aboutFailure: AboutFailureAction = (payload) => ({
  type: AboutActionTypes.FAILURE,
  payload,
});
