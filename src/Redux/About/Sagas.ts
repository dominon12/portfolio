import { put, call, CallEffect, PutEffect } from "redux-saga/effects";

import { URLS, performGET } from "./../../Services/ApiService";
import { Profile } from "./../../Types/ApiTypes";
import { aboutFailure, aboutFetching, aboutSuccess } from "./Actions";
import { AboutAction } from "./Types";

const fetchAbout = async () => performGET<Profile>(URLS.about);

export default function* loadProfileData(): Generator<
  CallEffect<Profile> | PutEffect<AboutAction>,
  void,
  Profile
> {
  yield put(aboutFetching());

  try {
    const data = yield call(fetchAbout);
    yield put(aboutSuccess(data));
  } catch (e) {
    yield put(aboutFailure(e));
  }
}
