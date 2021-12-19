import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";

import { URLS, performGET } from "./../../Services/ApiService";
import { Language } from "./../../Types/ApiTypes";
import { LanguagesAction, LanguagesActionTypes } from "./Types";
import { languagesFailure, languagesSuccess } from "./Actions";

const fetchLanguages = () => performGET<Language[]>(URLS.languages);

function* loadLanguages(): Generator<
  CallEffect<Language[]> | PutEffect<LanguagesAction>,
  void,
  Language[]
> {
  try {
    const data = yield call(fetchLanguages);
    yield put(languagesSuccess(data));
  } catch (e) {
    yield put(languagesFailure(e));
  }
}

export default function* languagesWatcher() {
  yield takeEvery(LanguagesActionTypes.FETCH, loadLanguages);
}
