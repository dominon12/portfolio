import {
  ContactActionTypes,
  ContactFailureAction,
  ContactFetchAction,
  ContactSuccessAction,
  SendContactRequestAction,
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

export const sendContactRequest: SendContactRequestAction = (
  data,
  setIsLoading,
  sendMessage,
  cleanForm
) => ({
  type: ContactActionTypes.SEND_CONTACT_REQUEST,
  payload: { data, setIsLoading, sendMessage, cleanForm },
});
