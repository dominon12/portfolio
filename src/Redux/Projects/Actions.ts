import {
  ProjectsActionTypes,
  ProjectsFailureAction,
  ProjectsFetchAction,
  ProjectsSuccessAction,
} from "./Types";

export const fetchProjects: ProjectsFetchAction = (search) => ({
  type: ProjectsActionTypes.FETCH,
  payload: search,
});

export const projectsSuccess: ProjectsSuccessAction = (payload) => ({
  type: ProjectsActionTypes.SUCCESS,
  payload,
});

export const projectsFailure: ProjectsFailureAction = (payload) => ({
  type: ProjectsActionTypes.FAILURE,
  payload,
});
