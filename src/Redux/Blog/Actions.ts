import {
  ArticlesListFailureAction,
  ArticlesListFetchAction,
  ArticlesListSuccessAction,
  BlogActionTypes,
} from "./Types";

export const fetchArticlesList: ArticlesListFetchAction = () => ({
  type: BlogActionTypes.ARTICLES_LIST_FETCH,
});

export const articlesListSuccess: ArticlesListSuccessAction = (payload) => ({
  type: BlogActionTypes.ARTICLES_LIST_SUCCESS,
  payload,
});

export const articlesListError: ArticlesListFailureAction = (payload) => ({
  type: BlogActionTypes.ARTICLES_LIST_FAILURE,
  payload,
});
