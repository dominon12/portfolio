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
import { RootState } from "../Types";

const fetchTechnologies = async () =>
  performGET<TechGroup[]>(URLS.technologies + "grouped");

export default function* loadTechnologies(): Generator<
  CallEffect<TechGroup[]> | PutEffect<TechnologiesAction> | SelectEffect,
  void,
  TechGroup[]
> {
  const techData = yield select((state: RootState) => state.technologies.data);

  if (!techData) {
    yield put(technologiesFetching());

    try {
      const data = yield call(fetchTechnologies);
      yield put(technologiesSuccess(data));
    } catch (e) {
      yield put(technologiesFailure(e));
    }
  }
}
