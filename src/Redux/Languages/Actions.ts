import {
  LanguagesActionTypes,
  LanguagesFailureAction,
  LanguagesFetchingAction,
  LanguagesSuccessAction,
} from "./Types";

export const languagesFetching: LanguagesFetchingAction = () => ({
  type: LanguagesActionTypes.FETCHING,
});

export const languagesSuccess: LanguagesSuccessAction = (payload) => ({
  type: LanguagesActionTypes.SUCCESS,
  payload,
});

export const languagesFailure: LanguagesFailureAction = (payload) => ({
  type: LanguagesActionTypes.FAILURE,
  payload,
});
