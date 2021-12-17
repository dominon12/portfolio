import { Profile } from "./../../Types/ApiTypes";
import {
  AboutActionTypes,
  AboutFailureAction,
  AboutFetchingAction,
  AboutSuccessAction,
} from "./Types";

export const aboutFetching = (): AboutFetchingAction => ({
  type: AboutActionTypes.ABOUT_FETCHING,
});

export const aboutSuccess = (payload: Profile): AboutSuccessAction => ({
  type: AboutActionTypes.ABOUT_SUCCESS,
  payload,
});

export const aboutFailure = (payload: unknown): AboutFailureAction => ({
  type: AboutActionTypes.ABOUT_FAILURE,
  payload,
});
