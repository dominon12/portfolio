import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import aboutReducer from "./About/Reducer";
import projectsReducer from "./Projects/Reducer";
import technologiesReducer from "./Technologies/Reducer";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    about: aboutReducer,
    projects: projectsReducer,
    technologies: technologiesReducer,
  });

export default createRootReducer;
