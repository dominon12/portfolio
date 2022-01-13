import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";

import { URLS, performGET } from "./../../Services/ApiService";
import { DonationMethod } from "./../../Types/ApiTypes";
import { DonationsAction, DonationsActionTypes } from "./Types";
import { donationsFailure, donationsSuccess } from "./Actions";

const fetchDonationMethods = () =>
  performGET<DonationMethod[]>(URLS.donations + "donation-method");

function* loadDonationMethods(): Generator<
  CallEffect<DonationMethod[]> | PutEffect<DonationsAction>,
  void,
  DonationMethod[]
> {
  try {
    const data = yield call(fetchDonationMethods);
    yield put(donationsSuccess(data));
  } catch (e) {
    yield put(donationsFailure(e));
  }
}

export default function* donationsWatcher() {
  yield takeEvery(DonationsActionTypes.FETCH, loadDonationMethods);
}
