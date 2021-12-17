import { aboutFailure, aboutFetching, aboutSuccess } from "./Actions";
import {
  put,
  call,
  take,
  CallEffect,
  PutEffect,
  TakeEffect,
  fork,
  ForkEffect,
} from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";

import { URLS } from "./../../Services/ApiService";
import { performGET } from "../../Services/ApiService";
import { Profile } from "./../../Types/ApiTypes";
import { AboutAction } from "./Types";

const fetchAbout = async () => performGET<Profile>(URLS.about);

function* loadProfileData(): Generator<
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

export default function* aboutSagaWatcher(): Generator<
  TakeEffect | ForkEffect,
  void,
  unknown
> {
  while (true) {
    const action: any = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname.endsWith("about")) {
      yield fork(loadProfileData);
    }
  }
}
