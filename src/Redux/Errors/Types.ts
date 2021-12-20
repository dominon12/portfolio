import { ISnackBarOptions } from "../../Contexts/SnackBarContext";
import { ErrorFeedback } from "../../Types/ApiTypes";

export enum ErrorsActionTypes {
  SUBMIT_ERROR = "SUBMIT_ERROR",
}

export type SubmitErrorAction = (
  data: ErrorFeedback,
  setIsLoading: (value: React.SetStateAction<boolean>) => void,
  sendMessage: (text: string, options?: ISnackBarOptions) => void
) => {
  type: ErrorsActionTypes.SUBMIT_ERROR;
  payload: {
    data: ErrorFeedback;
    setIsLoading: (value: React.SetStateAction<boolean>) => void;
    sendMessage: (text: string, options?: ISnackBarOptions) => void;
  };
};

export type ErrorsAction = ReturnType<SubmitErrorAction>;
