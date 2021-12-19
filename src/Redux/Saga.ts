import {
  getRouteId,
  PROJECTS_ROUTE,
  SKILLS_ROUTE,
  EXPERIENCE_ROUTE,
  LANGUAGES_ROUTE,
  DONATE_ROUTE,
  CONTACT_ROUTE,
  DOWNLOAD_ROUTE,
} from "./../Routes";
import { LOCATION_CHANGE } from "connected-react-router";
import {
  all,
  AllEffect,
  ForkEffect,
  spawn,
  take,
  TakeEffect,
  put,
  PutEffect,
} from "redux-saga/effects";

// worker sagas
import loadProfileData from "./About/Sagas";
// watcher sagas
import projectsWatcher from "./Projects/Sagas";
import downloadWatcher from "./Download/Sagas";
import technologiesWatcher from "./Technologies/Sagas";
import contactWatcher from "./Contact/Sagas";
import careerWatcher from "./Career/Sagas";
import donationsWatcher from "./Donations/Sagas";
import languagesWatcher from "./Languages/Sagas";
// actions
import { fetchCareerEvents } from "./Career/Actions";
import { fetchLanguages } from "./Languages/Actions";
import { fetchDonationMethods } from "./Donations/Actions";
import { fetchTechnologies } from "./Technologies/Actions";
import { fetchContactMethods } from "./Contact/Actions";
import { fetchProjects } from "./Projects/Actions";
import { loadDownloadData } from "./Download/Actions";

/**
 * Listens to LOCATION_CHANGE event and
 * dispatches actions corresponding to 
 * the new location.
 *
 * @return {*}  {(Generator<TakeEffect | PutEffect, void, unknown>)}
 */
function* routerWatcher(): Generator<TakeEffect | PutEffect, void, unknown> {
  while (true) {
    const {
      payload: { location },
    }: any = yield take(LOCATION_CHANGE);

    const routeId = getRouteId(location.pathname);

    switch (routeId) {
      case PROJECTS_ROUTE:
        yield put(fetchProjects(location.search));
        break;
      case SKILLS_ROUTE:
        yield put(fetchTechnologies());
        break;
      case EXPERIENCE_ROUTE:
        yield put(fetchCareerEvents());
        break;
      case LANGUAGES_ROUTE:
        yield put(fetchLanguages());
        break;
      case DONATE_ROUTE:
        yield put(fetchDonationMethods());
        break;
      case CONTACT_ROUTE:
        yield put(fetchContactMethods());
        break;
      case DOWNLOAD_ROUTE:
        yield put(loadDownloadData());
        break;
    }
  }
}

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  const sagas = [
    // workers
    loadProfileData,
    // watchers
    routerWatcher,
    projectsWatcher,
    technologiesWatcher,
    careerWatcher,
    languagesWatcher,
    donationsWatcher,
    contactWatcher,
    downloadWatcher,
  ];

  yield all(sagas.map((s) => spawn(s)));
}

export default rootSaga;
