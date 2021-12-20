import { call, delay, takeEvery } from "redux-saga/effects";

import { SnackBarMessageColor } from "../../Contexts/SnackBarContext";
import { performPOST, URLS } from "../../Services/ApiService";
import { ErrorsActionTypes, SubmitErrorAction } from "./Types";

function* submitError({
  payload: { data, setIsLoading, sendMessage },
}: ReturnType<SubmitErrorAction>) {
  setIsLoading(true);

  try {
    yield call(performPOST, URLS.errors + "error-feedback/", data);
    yield delay(500);
    
    sendMessage(
      "Thank you for feedback! Thanks to you I will fix this error faster!",
      {
        color: SnackBarMessageColor.SUCCESS,
      }
    );
  } catch (e) {
    sendMessage(
      "Something went wrong :( Please try again later or contact me via the Contact page",
      {
        color: SnackBarMessageColor.DANGER,
        delay: 5000,
      }
    );
  } finally {
    setIsLoading(false);
  }
}

export default function* errorsWatcher() {
  yield takeEvery(ErrorsActionTypes.SUBMIT_ERROR, submitError);
}
