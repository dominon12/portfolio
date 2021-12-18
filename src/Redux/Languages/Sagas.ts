import { put, call, CallEffect, PutEffect } from "redux-saga/effects";

import { URLS } from "./../../Services/ApiService";
import { performGET } from "../../Services/ApiService";
import { Language } from "./../../Types/ApiTypes";
import { LanguagesAction } from "./Types";
import {
  languagesFailure,
  languagesSuccess,
  languagesFetching,
} from "./Actions";

const fetchLanguages = async () => performGET<Language[]>(URLS.languages);

export default function* loadLanguages(): Generator<
  CallEffect<Language[]> | PutEffect<LanguagesAction>,
  void,
  Language[]
> {
  yield put(languagesFetching());

  try {
    const data = yield call(fetchLanguages);
    yield put(languagesSuccess(data));
  } catch (e) {
    yield put(languagesFailure(e));
  }
}
