import { createInitialState } from "../Helpers";
import { RootState } from "../Types";
import { ProjectsAction, ProjectsActionTypes } from "./Types";

const INITIAL_STATE: RootState["projects"] = createInitialState();

function projectsReducer(state = INITIAL_STATE, action: ProjectsAction) {
  switch (action.type) {
    case ProjectsActionTypes.SUCCESS:
      return { data: action.payload, pending: false, error: null };
    case ProjectsActionTypes.FETCH:
      return { ...state, pending: true, error: null };
    case ProjectsActionTypes.FAILURE:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
}

export default projectsReducer;
