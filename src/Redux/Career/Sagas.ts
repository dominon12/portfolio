import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";

import { URLS, performGET } from "./../../Services/ApiService";
import { CareerEvent } from "./../../Types/ApiTypes";
import { CareerAction, CareerActionTypes } from "./Types";
import { careerFailure, careerSuccess } from "./Actions";

const fetchCareerEvents = () => performGET<CareerEvent[]>(URLS.career);

function* loadCareerEvents(): Generator<
  CallEffect<CareerEvent[]> | PutEffect<CareerAction>,
  void,
  CareerEvent[]
> {
  try {
    const data = yield call(fetchCareerEvents);
    yield put(careerSuccess(data));
  } catch (e) {
    yield put(careerFailure(e));
  }
}

export default function* careerWatcher() {
  yield takeEvery(CareerActionTypes.FETCH, loadCareerEvents);
}
