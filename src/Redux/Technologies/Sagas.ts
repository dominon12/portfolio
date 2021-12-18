import { InitialState } from "../Types";
import {
  put,
  call,
  CallEffect,
  PutEffect,
  select,
  SelectEffect,
} from "redux-saga/effects";

import { URLS } from "./../../Services/ApiService";
import { performGET } from "../../Services/ApiService";
import { TechGroup } from "./../../Types/ApiTypes";
import { TechnologiesAction } from "./Types";
import {
  technologiesFailure,
  technologiesSuccess,
  technologiesFetching,
} from "./Actions";
import { selectTechnologies } from "./Selectors";

const fetchTechnologies = async () =>
  performGET<TechGroup[]>(URLS.technologies + "grouped");

export default function* loadTechnologies(): Generator<
  CallEffect<TechGroup[]> | PutEffect<TechnologiesAction> | SelectEffect,
  void,
  InitialState<TechGroup[]> | TechGroup[]
> {
  const technologies = yield select(selectTechnologies);

  if (!(technologies as InitialState<TechGroup[]>).data) {
    yield put(technologiesFetching());

    try {
      const data = yield call(fetchTechnologies);
      yield put(technologiesSuccess(data as TechGroup[]));
    } catch (e) {
      yield put(technologiesFailure(e));
    }
  }
}
