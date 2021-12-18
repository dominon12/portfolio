import {
  DonationsActionTypes,
  DonationsFailureAction,
  DonationsFetchingAction,
  DonationsSuccessAction,
} from "./Types";

export const donationsFetching: DonationsFetchingAction = () => ({
  type: DonationsActionTypes.FETCHING,
});

export const donationsSuccess: DonationsSuccessAction = (payload) => ({
  type: DonationsActionTypes.SUCCESS,
  payload,
});

export const donationsFailure: DonationsFailureAction = (payload) => ({
  type: DonationsActionTypes.FAILURE,
  payload,
});
