import {
  ContactActionTypes,
  ContactFailureAction,
  ContactFetchAction,
  ContactSuccessAction,
} from "./Types";

export const fetchContactMethods: ContactFetchAction = () => ({
  type: ContactActionTypes.FETCH,
});

export const contactMethodsSuccess: ContactSuccessAction = (payload) => ({
  type: ContactActionTypes.SUCCESS,
  payload,
});

export const contactMethodsFailure: ContactFailureAction = (payload) => ({
  type: ContactActionTypes.FAILURE,
  payload,
});
