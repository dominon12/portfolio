import { PaginatedProjects } from "./../../Types/ApiTypes";

export enum ProjectsActionTypes {
  FETCHING = "PROJECTS_FETCHING",
  SUCCESS = "PROJECTS_SUCCESS",
  FAILURE = "PROJECTS_FAILURE",
}

export type ProjectsFetchingAction = () => {
  type: ProjectsActionTypes.FETCHING;
};

export type ProjectsSuccessAction = (payload: PaginatedProjects) => {
  type: ProjectsActionTypes.SUCCESS;
  payload: PaginatedProjects;
};

export type ProjectsFailureAction = (payload: unknown) => {
  type: ProjectsActionTypes.FAILURE;
  payload: unknown;
};

export type ProjectsAction = ReturnType<
  ProjectsFetchingAction | ProjectsSuccessAction | ProjectsFailureAction
>;
