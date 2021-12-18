import { DonationMethod } from "./../../Types/ApiTypes";

export enum DonationsActionTypes {
  FETCHING = "DONATIONS_FETCHING",
  SUCCESS = "DONATIONS_SUCCESS",
  FAILURE = "DONATIONS_FAILURE",
}

export type DonationsFetchingAction = () => {
  type: DonationsActionTypes.FETCHING;
};

export type DonationsSuccessAction = (payload: DonationMethod[]) => {
  type: DonationsActionTypes.SUCCESS;
  payload: DonationMethod[];
};

export type DonationsFailureAction = (payload: unknown) => {
  type: DonationsActionTypes.FAILURE;
  payload: unknown;
};

export type DonationsAction = ReturnType<
  DonationsFetchingAction | DonationsSuccessAction | DonationsFailureAction
>;
