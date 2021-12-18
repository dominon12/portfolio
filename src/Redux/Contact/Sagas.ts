import { put, call, CallEffect, PutEffect } from "redux-saga/effects";

import { URLS } from "./../../Services/ApiService";
import { performGET } from "../../Services/ApiService";
import { ContactMethod } from "./../../Types/ApiTypes";
import { ContactAction } from "./Types";
import {
  contactMethodsFailure,
  contactMethodsSuccess,
  contactMethodsFetching,
} from "./Actions";

const fetchContactMethods = async () =>
  performGET<ContactMethod[]>(URLS.contact + "contact-method");

export default function* loadContactMethods(): Generator<
  CallEffect<ContactMethod[]> | PutEffect<ContactAction>,
  void,
  ContactMethod[]
> {
  yield put(contactMethodsFetching());

  try {
    const data = yield call(fetchContactMethods);
    yield put(contactMethodsSuccess(data));
  } catch (e) {
    yield put(contactMethodsFailure(e));
  }
}
