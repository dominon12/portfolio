import { createInitialState } from "./../Helpers";
import { RootState } from "./../Types";
import { BlogAction, BlogActionTypes } from "./Types";

const INITIAL_STATE: RootState["blog"] = {
  articles: createInitialState(),
  article: createInitialState(),
};

function blogReducer(state = INITIAL_STATE, action: BlogAction) {
  switch (action.type) {
    case BlogActionTypes.ARTICLES_LIST_SUCCESS:
      return {
        ...state.article,
        articles: {
          data: action.payload,
          pending: false,
          error: null,
        },
      };
    case BlogActionTypes.ARTICLES_LIST_FETCH:
      return {
        ...state.article,
        articles: {
          ...state,
          pending: true,
          error: null,
        },
      };
    case BlogActionTypes.ARTICLES_LIST_FAILURE:
      return {
        ...state.article,
        articles: {
          ...state,
          pending: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}

export default blogReducer;
