import {
  TechnologiesActionTypes,
  TechnologiesFailureAction,
  TechnologiesFetchingAction,
  TechnologiesSuccessAction,
} from "./Types";

export const technologiesFetching: TechnologiesFetchingAction = () => ({
  type: TechnologiesActionTypes.FETCHING,
});

export const technologiesSuccess: TechnologiesSuccessAction = (payload) => ({
  type: TechnologiesActionTypes.SUCCESS,
  payload,
});

export const technologiesFailure: TechnologiesFailureAction = (payload) => ({
  type: TechnologiesActionTypes.FAILURE,
  payload,
});
