import {
  call,
  CallEffect,
  delay,
  put,
  PutEffect,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import { URLS, performGET, performPOST } from "./../../Services/ApiService";
import { ContactMethod } from "./../../Types/ApiTypes";
import {
  ContactAction,
  ContactActionTypes,
  SendContactRequestAction,
} from "./Types";
import { contactMethodsFailure, contactMethodsSuccess } from "./Actions";
import { SnackBarMessageColor } from "../../Contexts/SnackBarContext";

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

function* sendContactRequest({
  payload: { data, setIsLoading, sendMessage, cleanForm },
}: ReturnType<SendContactRequestAction>): Generator<CallEffect, void, unknown> {
  setIsLoading(true);

  try {
    yield call(performPOST, URLS.contact + "contact-request/", data);
    yield delay(500);

    sendMessage(
      "Your contact request has been successfully sent! I will contact you ASAP.",
      { color: SnackBarMessageColor.SUCCESS }
    );
  } catch (e) {
    sendMessage(
      "Something sent wrong. Please try again later or contact me via links below.",
      { color: SnackBarMessageColor.DANGER }
    );
  } finally {
    setIsLoading(false);
    cleanForm();
  }
}

export default function* contactWatcher() {
  yield takeEvery(ContactActionTypes.FETCH, loadContactMethods);
  yield takeLatest(ContactActionTypes.SEND_CONTACT_REQUEST, sendContactRequest);
}
