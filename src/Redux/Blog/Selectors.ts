import { RootState } from "./../Types";

export const selectArticles = (state: RootState) => state.blog.articles;
