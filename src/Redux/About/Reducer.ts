import { Profile } from './../../Types/ApiTypes';
import { AnyAction } from "redux";

import * as types from "./Types";

const INITIAL_STATE: {
    profile: Profile | null,
    aboutUnits: any[]
} = {
  profile: null,
  aboutUnits: [],
};

// TODO change AnyAction to normal type definition
function aboutReducer(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case types.ADD_PROFILE_DATA:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}

export default aboutReducer;
