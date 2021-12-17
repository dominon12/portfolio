import { InitialState } from "../Types";
import { AboutUnit } from "./../../Types/ApiTypes";
import { AboutAction, AboutActionTypes } from "./Types";

const INITIAL_STATE: InitialState<AboutUnit[]> = {
  data: null,
  pending: false,
  error: null,
};

function aboutReducer(state = INITIAL_STATE, action: AboutAction) {
  switch (action.type) {
    case AboutActionTypes.ABOUT_FETCHING:
      return { ...state, pending: true };
    case AboutActionTypes.ABOUT_SUCCESS:
      return { pending: false, error: null, data: action.payload };
    case AboutActionTypes.ABOUT_FAILURE:
      return { pending: false, error: action.payload, data: null };
    default:
      return state;
  }
}

export default aboutReducer;
