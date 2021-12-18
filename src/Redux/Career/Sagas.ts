import { put, call, CallEffect, PutEffect } from "redux-saga/effects";

import { URLS } from "./../../Services/ApiService";
import { performGET } from "../../Services/ApiService";
import { CareerEvent } from "./../../Types/ApiTypes";
import { CareerAction } from "./Types";
import { careerFailure, careerSuccess, careerFetching } from "./Actions";

const fetchCareerEvents = async () => performGET<CareerEvent[]>(URLS.career);

export default function* loadCareerEvents(): Generator<
  CallEffect<CareerEvent[]> | PutEffect<CareerAction>,
  void,
  CareerEvent[]
> {
  yield put(careerFetching());

  try {
    const data = yield call(fetchCareerEvents);
    yield put(careerSuccess(data));
  } catch (e) {
    yield put(careerFailure(e));
  }
}
