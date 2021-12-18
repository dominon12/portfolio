import { LOCATION_CHANGE } from "connected-react-router";
import {
  all,
  AllEffect,
  ForkEffect,
  fork,
  spawn,
  take,
  TakeEffect,
} from "redux-saga/effects";

import aboutSagaWatcher from "./About/Sagas";
import loadCareerEvents from "./Career/Sagas";
import loadContactMethods from "./Contact/Sagas";
import loadDonationMethods from "./Donations/Sagas";
import loadLanguages from "./Languages/Sagas";
import projectsSagaWatcher from "./Projects/Sagas";
import loadTechnologies from "./Technologies/Sagas";

function* routerWatcher(): Generator<TakeEffect | ForkEffect, void, undefined> {
  while (true) {
    const action: any = yield take(LOCATION_CHANGE);
    const { location } = action.payload;

    switch (location.pathname) {
      case "/projects":
        yield fork(projectsSagaWatcher, location);
        yield fork(loadTechnologies);
        break;
      case "/skills":
        yield fork(loadTechnologies);
        break;
      case "/experience":
        yield fork(loadCareerEvents);
        break;
      case "/languages":
        yield fork(loadLanguages);
        break;
      case "/donate":
        yield fork(loadDonationMethods);
        break;
      case "/contact":
        yield fork(loadContactMethods);
        break;
      case "/download":
        yield fork(loadLanguages);
        yield fork(loadCareerEvents);
        yield fork(loadContactMethods);
        yield fork(loadTechnologies);
    }
  }
}

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  const sagas = [aboutSagaWatcher, routerWatcher];

  yield all(sagas.map((s) => spawn(s)));
}

export default rootSaga;
