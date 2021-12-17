import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import aboutReducer from "./About/Reducer";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    about: aboutReducer,
  });

export default createRootReducer;
