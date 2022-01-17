import { PaginatedArticles } from "./../../Types/ApiTypes";

export enum BlogActionTypes {
  ARTICLES_LIST_FETCH = "ARTICLES_LIST_FETCH",
  ARTICLES_LIST_SUCCESS = "ARTICLES_LIST_SUCCESS",
  ARTICLES_LIST_FAILURE = "ARTICLES_LIST_FAILURE",
}

export type ArticlesListFetchAction = () => {
  type: BlogActionTypes.ARTICLES_LIST_FETCH;
};

export type ArticlesListSuccessAction = (payload: PaginatedArticles) => {
  type: BlogActionTypes.ARTICLES_LIST_SUCCESS;
  payload: PaginatedArticles;
};

export type ArticlesListFailureAction = (payload: unknown) => {
  type: BlogActionTypes.ARTICLES_LIST_FAILURE;
  payload: unknown;
};

export type BlogAction = ReturnType<
  | ArticlesListFetchAction
  | ArticlesListSuccessAction
  | ArticlesListFailureAction
>;
