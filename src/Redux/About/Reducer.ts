import { createInitialState } from "./../Helpers";
import { RootState } from "../Types";
import { AboutAction, AboutActionTypes } from "./Types";

const INITIAL_STATE: RootState["about"] = createInitialState();

function aboutReducer(state = INITIAL_STATE, action: AboutAction) {
  switch (action.type) {
    case AboutActionTypes.SUCCESS:
      return { data: action.payload, pending: false, error: null };
    case AboutActionTypes.FETCHING:
      return { ...state, pending: true, error: null };
    case AboutActionTypes.FAILURE:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
}

export default aboutReducer;
