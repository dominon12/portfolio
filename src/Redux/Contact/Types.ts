import { ContactMethod } from "./../../Types/ApiTypes";

export enum ContactActionTypes {
  FETCHING = "CONTACT_FETCHING",
  SUCCESS = "CONTACT_SUCCESS",
  FAILURE = "CONTACT_FAILURE",
}

export type ContactFetchingAction = () => {
  type: ContactActionTypes.FETCHING;
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
  ContactFetchingAction | ContactSuccessAction | ContactFailureAction
>;
