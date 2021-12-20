import { ErrorInfo } from "react";

import { ISnackBarOptions } from "../../Contexts/SnackBarContext";
import { ClientError, ErrorFeedback } from "../../Types/ApiTypes";

export enum ErrorsActionTypes {
  SUBMIT_ERROR = "SUBMIT_ERROR",
  REPORT_ERROR = "REPORT_ERROR",
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

export type ReportErrorAction = (
  error: Error,
  errorInfo: ErrorInfo
) => {
  type: ErrorsActionTypes.REPORT_ERROR;
  payload: {
    error: Error;
    errorInfo: ErrorInfo;
  };
};

export type ErrorsAction = ReturnType<SubmitErrorAction>;
