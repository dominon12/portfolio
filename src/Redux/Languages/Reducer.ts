import { RootState } from "../Types";
import { LanguagesAction, LanguagesActionTypes } from "./Types";

const INITIAL_STATE: RootState["technologies"] = {
  data: null,
  pending: false,
  error: null,
};

function languagesReducer(state = INITIAL_STATE, action: LanguagesAction) {
  switch (action.type) {
    case LanguagesActionTypes.SUCCESS:
      return { data: action.payload, pending: false, error: null };
    case LanguagesActionTypes.FETCHING:
      return { ...state, pending: true, error: null };
    case LanguagesActionTypes.FAILURE:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
}

export default languagesReducer;
