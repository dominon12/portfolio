import {
  LanguagesActionTypes,
  LanguagesFailureAction,
  LanguagesFetchAction,
  LanguagesSuccessAction,
} from "./Types";

export const fetchLanguages: LanguagesFetchAction = () => ({
  type: LanguagesActionTypes.FETCH,
});

export const languagesSuccess: LanguagesSuccessAction = (payload) => ({
  type: LanguagesActionTypes.SUCCESS,
  payload,
});

export const languagesFailure: LanguagesFailureAction = (payload) => ({
  type: LanguagesActionTypes.FAILURE,
  payload,
});
