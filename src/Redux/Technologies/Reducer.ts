import { createInitialState } from "../Helpers";
import { RootState } from "../Types";
import { TechnologiesAction, TechnologiesActionTypes } from "./Types";

const INITIAL_STATE: RootState["technologies"] = createInitialState();

function technologiesReducer(
  state = INITIAL_STATE,
  action: TechnologiesAction
) {
  switch (action.type) {
    case TechnologiesActionTypes.SUCCESS:
      return { data: action.payload, pending: false, error: null };
    case TechnologiesActionTypes.FETCH:
      return { ...state, pending: true, error: null };
    case TechnologiesActionTypes.FAILURE:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
}

export default technologiesReducer;
