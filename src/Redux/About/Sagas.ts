import { Profile, ApiResponse } from "./../../Types/ApiTypes";
import { all, put, fork, call } from "redux-saga/effects";

import { addProfileData } from "./Actions";
import { URLS } from "./../../Services/ApiService";
import { performGET } from "../../Services/ApiService";

function* loadProfileData(): Generator<any, any, any> {
  const data: ApiResponse<Profile> = yield call(
    performGET,
    URLS.about + "profile"
  );
  
  if (data.status === 200) {
    yield put(addProfileData(data.data));
  }
}

export default function* loadBasicData() {
  yield all([fork(loadProfileData)]);
}
