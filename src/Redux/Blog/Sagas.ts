import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";

import { PaginatedArticles } from "./../../Types/ApiTypes";
import { performGET, URLS } from "../../Services/ApiService";
import { articlesListError, articlesListSuccess } from "./Actions";
import { BlogAction, BlogActionTypes } from "./Types";

const fetchArticlesList = async () =>
  performGET<PaginatedArticles>(URLS.blog + "articles/");

function* loadArticlesList(): Generator<
  CallEffect<PaginatedArticles> | PutEffect<BlogAction>,
  void,
  PaginatedArticles
> {
  try {
    const data = yield call(fetchArticlesList);
    yield put(articlesListSuccess(data));
  } catch (e) {
    yield put(articlesListError(e));
  }
}

export default function* blogWatcher() {
  yield takeEvery(BlogActionTypes.ARTICLES_LIST_FETCH, loadArticlesList);
}
