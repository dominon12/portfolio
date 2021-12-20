import { createInitialState } from "./../Helpers";
import { RootState } from "../Types";
import { ContactAction, ContactActionTypes } from "./Types";

const INITIAL_STATE: RootState["contact"] = createInitialState();

function contactReducer(state = INITIAL_STATE, action: ContactAction) {
  switch (action.type) {
    case ContactActionTypes.SUCCESS:
      return { data: action.payload, pending: false, error: null };
    case ContactActionTypes.FETCH:
      return { ...state, pending: true, error: null };
    case ContactActionTypes.FAILURE:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
}

export default contactReducer;
