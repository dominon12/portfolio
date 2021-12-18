import { Language } from "./../../Types/ApiTypes";

export enum LanguagesActionTypes {
  FETCHING = "LANGUAGES_FETCHING",
  SUCCESS = "LANGUAGES_SUCCESS",
  FAILURE = "LANGUAGES_FAILURE",
}

export type LanguagesFetchingAction = () => {
  type: LanguagesActionTypes.FETCHING;
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
  | LanguagesFetchingAction
  | LanguagesSuccessAction
  | LanguagesFailureAction
>;
