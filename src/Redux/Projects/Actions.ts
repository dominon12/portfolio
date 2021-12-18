import {
  ProjectsActionTypes,
  ProjectsFailureAction,
  ProjectsFetchingAction,
  ProjectsSuccessAction,
} from "./Types";

export const projectsFetching: ProjectsFetchingAction = () => ({
  type: ProjectsActionTypes.FETCHING,
});

export const projectsSuccess: ProjectsSuccessAction = (payload) => ({
  type: ProjectsActionTypes.SUCCESS,
  payload,
});

export const projectsFailure: ProjectsFailureAction = (payload) => ({
  type: ProjectsActionTypes.FAILURE,
  payload,
});
