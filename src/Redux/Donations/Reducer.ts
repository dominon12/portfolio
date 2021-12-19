import { RootState } from "../Types";
import { DonationsAction, DonationsActionTypes } from "./Types";

const INITIAL_STATE: RootState["donations"] = {
  data: null,
  pending: false,
  error: null,
};

function donationsReducer(state = INITIAL_STATE, action: DonationsAction) {
  switch (action.type) {
    case DonationsActionTypes.SUCCESS:
      return { data: action.payload, pending: false, error: null };
    case DonationsActionTypes.FETCH:
      return { ...state, pending: true, error: null };
    case DonationsActionTypes.FAILURE:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
}

export default donationsReducer;
