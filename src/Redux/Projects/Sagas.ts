import {
  put,
  call,
  CallEffect,
  PutEffect,
  fork,
  ForkEffect,
} from "redux-saga/effects";

import { URLS } from "./../../Services/ApiService";
import { performGET } from "../../Services/ApiService";
import { PaginatedProjects } from "./../../Types/ApiTypes";
import { ProjectsAction } from "./Types";
import { projectsFailure, projectsSuccess, projectsFetching } from "./Actions";

const fetchProjects = async (search: string) =>
  performGET<PaginatedProjects>(URLS.projects, search);

function* loadProjects(
  search: string
): Generator<
  CallEffect<PaginatedProjects> | PutEffect<ProjectsAction>,
  void,
  PaginatedProjects
> {
  yield put(projectsFetching());

  try {
    const data = yield call(fetchProjects, search);
    yield put(projectsSuccess(data));
  } catch (e) {
    yield put(projectsFailure(e));
  }
}

let includedProjectId = false;

export default function* projectsSagaWatcher(
  location: any
): Generator<ForkEffect, void, unknown> {
  const includesProjectId = location.search.includes("projectId");
  const leftProjectPage = !includesProjectId && includedProjectId;

  if (
    (!leftProjectPage && !includesProjectId) ||
    (includesProjectId && !includedProjectId)
  ) {
    yield fork(loadProjects, location.search as string);
  }

  includedProjectId = includesProjectId;
}
