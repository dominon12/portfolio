import {
  call,
  CallEffect,
  put,
  PutEffect,
  select,
  SelectEffect,
  takeLatest,
} from "redux-saga/effects";

import { URLS, performGET } from "./../../Services/ApiService";
import { PaginatedProjects, TechGroup } from "./../../Types/ApiTypes";
import { selectTechnologies } from "../Technologies/Selectors";
import { fetchTechnologies } from "../Technologies/Actions";
import { TechnologiesAction } from "./../Technologies/Types";
import { InitialState } from "../Types";
import {
  ProjectsFetchAction,
  ProjectsAction,
  ProjectsActionTypes,
} from "./Types";
import { projectsFailure, projectsSuccess } from "./Actions";

const fetchProjects = (search: string) =>
  performGET<PaginatedProjects>(URLS.projects, search);

function* loadProjects({
  payload: search,
}: ReturnType<ProjectsFetchAction>): Generator<
  | PutEffect<ProjectsAction | TechnologiesAction>
  | SelectEffect
  | CallEffect<PaginatedProjects>,
  void,
  PaginatedProjects | InitialState<TechGroup[]>
> {
  const technologies = yield select(selectTechnologies);
  if (!(technologies as InitialState<TechGroup[]>).data) {
    yield put(fetchTechnologies());
  }

  try {
    const data = yield call(fetchProjects, search);
    yield put(projectsSuccess(data as PaginatedProjects));
  } catch (e) {
    yield put(projectsFailure(e));
  }
}

export default function* projectsWatcher() {
  yield takeLatest(ProjectsActionTypes.FETCH, loadProjects);
}
