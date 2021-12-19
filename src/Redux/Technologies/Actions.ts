import {
  TechnologiesActionTypes,
  TechnologiesFailureAction,
  TechnologiesFetchAction,
  TechnologiesSuccessAction,
} from "./Types";

export const fetchTechnologies: TechnologiesFetchAction = () => ({
  type: TechnologiesActionTypes.FETCH,
});

export const technologiesSuccess: TechnologiesSuccessAction = (payload) => ({
  type: TechnologiesActionTypes.SUCCESS,
  payload,
});

export const technologiesFailure: TechnologiesFailureAction = (payload) => ({
  type: TechnologiesActionTypes.FAILURE,
  payload,
});
