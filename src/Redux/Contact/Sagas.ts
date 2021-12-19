import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";

import { URLS, performGET } from "./../../Services/ApiService";
import { ContactMethod } from "./../../Types/ApiTypes";
import { ContactAction, ContactActionTypes } from "./Types";
import { contactMethodsFailure, contactMethodsSuccess } from "./Actions";

const fetchContactMethods = () =>
  performGET<ContactMethod[]>(URLS.contact + "contact-method");

function* loadContactMethods(): Generator<
  CallEffect<ContactMethod[]> | PutEffect<ContactAction>,
  void,
  ContactMethod[]
> {
  try {
    const data = yield call(fetchContactMethods);
    yield put(contactMethodsSuccess(data));
  } catch (e) {
    yield put(contactMethodsFailure(e));
  }
}

export default function* contactWatcher() {
  yield takeEvery(ContactActionTypes.FETCH, loadContactMethods);
}
