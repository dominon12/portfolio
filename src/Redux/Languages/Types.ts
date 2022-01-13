import { Language } from "./../../Types/ApiTypes";

export enum LanguagesActionTypes {
  FETCH = "LANGUAGES_FETCH",
  SUCCESS = "LANGUAGES_SUCCESS",
  FAILURE = "LANGUAGES_FAILURE",
}

export type LanguagesFetchAction = () => {
  type: LanguagesActionTypes.FETCH;
};

export type LanguagesSuccessAction = (payload: Language[]) => {
  type: LanguagesActionTypes.SUCCESS;
  payload: Language[];
};

export type LanguagesFailureAction = (payload: unknown) => {
  type: LanguagesActionTypes.FAILURE;
  payload: unknown;
};

export type LanguagesAction = ReturnType<
  | LanguagesFetchAction
  | LanguagesSuccessAction
  | LanguagesFailureAction
>;
