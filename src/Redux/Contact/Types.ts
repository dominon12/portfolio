import { ISnackBarOptions } from "../../Contexts/SnackBarContext";
import { ContactMethod, ContactRequest } from "./../../Types/ApiTypes";

export enum ContactActionTypes {
  FETCH = "CONTACT_FETCH",
  SUCCESS = "CONTACT_SUCCESS",
  FAILURE = "CONTACT_FAILURE",
  SEND_CONTACT_REQUEST = "SEND_CONTACT_REQUEST",
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

export type SendContactRequestAction = (
  data: ContactRequest,
  setIsLoading: (value: React.SetStateAction<boolean>) => void,
  sendMessage: (text: string, options?: ISnackBarOptions) => void
) => {
  type: ContactActionTypes.SEND_CONTACT_REQUEST;
  payload: {
    data: ContactRequest;
    setIsLoading: (value: React.SetStateAction<boolean>) => void;
    sendMessage: (text: string, options?: ISnackBarOptions) => void;
  };
};

export type ContactAction = ReturnType<
  | ContactFetchAction
  | ContactSuccessAction
  | ContactFailureAction
  | SendContactRequestAction
>;
