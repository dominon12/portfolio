import { put, call, CallEffect, PutEffect } from "redux-saga/effects";

import { URLS } from "./../../Services/ApiService";
import { performGET } from "../../Services/ApiService";
import { DonationMethod } from "./../../Types/ApiTypes";
import { DonationsAction } from "./Types";
import {
  donationsFailure,
  donationsSuccess,
  donationsFetching,
} from "./Actions";

const fetchDonationMethods = async () =>
  performGET<DonationMethod[]>(URLS.donations + "donation-method");

export default function* loadDonationMethods(): Generator<
  CallEffect<DonationMethod[]> | PutEffect<DonationsAction>,
  void,
  DonationMethod[]
> {
  yield put(donationsFetching());

  try {
    const data = yield call(fetchDonationMethods);
    yield put(donationsSuccess(data));
  } catch (e) {
    yield put(donationsFailure(e));
  }
}
