import { call, all } from "redux-saga/effects";

import loadBasicData from "./About/Sagas";

function* rootSaga() {
  //   const sagas = [loadBasicData];

  //   const retrySagas = yield sagas.map((saga) =>
  //     spawn(function* () {
  //       while (true) {
  //         try {
  //           yield call(saga);
  //           break;
  //         } catch (err) {
  //           console.error(err);
  //         }
  //       }
  //     })
  //   );

  yield all([call(loadBasicData)]);
}

export default rootSaga;
