import { PaginatedProjects } from "./../../Types/ApiTypes";

export enum ProjectsActionTypes {
  FETCH = "PROJECTS_FETCH",
  SUCCESS = "PROJECTS_SUCCESS",
  FAILURE = "PROJECTS_FAILURE",
}

export const PROJECTS_FETCH = "PROJECTS_FETCH";

export type ProjectsFetchAction = (search: string) => {
  type: ProjectsActionTypes.FETCH;
  payload: string;
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
  ProjectsFetchAction | ProjectsSuccessAction | ProjectsFailureAction
>;
