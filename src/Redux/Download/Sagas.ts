import { put, takeEvery } from "redux-saga/effects";

import { fetchLanguages } from "../Languages/Actions";
import { fetchCareerEvents } from "../Career/Actions";
import { fetchContactMethods } from "../Contact/Actions";
import { fetchTechnologies } from "../Technologies/Actions";
import { DownloadActionTypes } from "./Type";

function* loadDownloadData() {
  yield put(fetchLanguages());
  yield put(fetchCareerEvents());
  yield put(fetchContactMethods());
  yield put(fetchTechnologies());
}

export default function* downloadWatcher() {
  yield takeEvery(DownloadActionTypes.LOAD, loadDownloadData);
}
