import { DonationMethod } from "./../../Types/ApiTypes";

export enum DonationsActionTypes {
  FETCH = "DONATIONS_FETCH",
  SUCCESS = "DONATIONS_SUCCESS",
  FAILURE = "DONATIONS_FAILURE",
}

export type DonationsFetchAction = () => {
  type: DonationsActionTypes.FETCH;
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
  DonationsFetchAction | DonationsSuccessAction | DonationsFailureAction
>;
