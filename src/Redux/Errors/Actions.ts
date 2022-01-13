import {
  ErrorsActionTypes,
  ReportErrorAction,
  SubmitErrorAction,
} from "./Types";

export const submitError: SubmitErrorAction = (
  data,
  setIsLoading,
  sendMessage
) => ({
  type: ErrorsActionTypes.SUBMIT_ERROR,
  payload: {
    data,
    setIsLoading,
    sendMessage,
  },
});

export const reportError: ReportErrorAction = (error, errorInfo) => ({
  type: ErrorsActionTypes.REPORT_ERROR,
  payload: { error, errorInfo },
});
