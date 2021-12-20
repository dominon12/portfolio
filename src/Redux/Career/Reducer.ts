import { createInitialState } from "../Helpers";
import { RootState } from "../Types";
import { CareerAction, CareerActionTypes } from "./Types";

const INITIAL_STATE: RootState["career"] = createInitialState();

function careerReducer(state = INITIAL_STATE, action: CareerAction) {
  switch (action.type) {
    case CareerActionTypes.SUCCESS:
      return { data: action.payload, pending: false, error: null };
    case CareerActionTypes.FETCH:
      return { ...state, pending: true, error: null };
    case CareerActionTypes.FAILURE:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
}

export default careerReducer;
