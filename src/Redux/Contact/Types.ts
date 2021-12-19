import { ContactMethod } from "./../../Types/ApiTypes";

export enum ContactActionTypes {
  FETCH = "CONTACT_FETCH",
  SUCCESS = "CONTACT_SUCCESS",
  FAILURE = "CONTACT_FAILURE",
}

export type ContactFetchAction = () => {
  type: ContactActionTypes.FETCH;
};

export type ContactSuccessAction = (payload: ContactMethod[]) => {
  type: ContactActionTypes.SUCCESS;
  payload: ContactMethod[];
};

export type ContactFailureAction = (payload: unknown) => {
  type: ContactActionTypes.FAILURE;
  payload: unknown;
};

export type ContactAction = ReturnType<
  ContactFetchAction | ContactSuccessAction | ContactFailureAction
>;
