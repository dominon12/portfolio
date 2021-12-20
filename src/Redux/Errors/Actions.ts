import { ErrorsActionTypes, SubmitErrorAction } from "./Types";

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
