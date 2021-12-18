import {
  ContactActionTypes,
  ContactFailureAction,
  ContactFetchingAction,
  ContactSuccessAction,
} from "./Types";

export const contactMethodsFetching: ContactFetchingAction = () => ({
  type: ContactActionTypes.FETCHING,
});

export const contactMethodsSuccess: ContactSuccessAction = (payload) => ({
  type: ContactActionTypes.SUCCESS,
  payload,
});

export const contactMethodsFailure: ContactFailureAction = (payload) => ({
  type: ContactActionTypes.FAILURE,
  payload,
});
