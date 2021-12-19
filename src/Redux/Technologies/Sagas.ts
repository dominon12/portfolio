import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";

import { TechnologiesAction, TechnologiesActionTypes } from "./Types";
import { technologiesFailure, technologiesSuccess } from "./Actions";
import { URLS, performGET } from "./../../Services/ApiService";
import { TechGroup } from "./../../Types/ApiTypes";

const fetchTechnologies = () =>
  performGET<TechGroup[]>(URLS.technologies + "grouped");

function* loadTechnologies(): Generator<
  CallEffect<TechGroup[]> | PutEffect<TechnologiesAction>,
  void,
  TechGroup[]
> {
  try {
    const data = yield call(fetchTechnologies);
    yield put(technologiesSuccess(data));
  } catch (e) {
    yield put(technologiesFailure(e));
  }
}

export default function* technologiesWatcher() {
  yield takeLatest(TechnologiesActionTypes.FETCH, loadTechnologies);
}
