import { all, AllEffect, ForkEffect, spawn } from "redux-saga/effects";

import aboutSagaWatcher from "./About/Sagas";

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([spawn(aboutSagaWatcher)]);
}

export default rootSaga;
