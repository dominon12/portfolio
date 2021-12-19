import {
  DonationsActionTypes,
  DonationsFailureAction,
  DonationsFetchAction,
  DonationsSuccessAction,
} from "./Types";

export const fetchDonationMethods: DonationsFetchAction = () => ({
  type: DonationsActionTypes.FETCH,
});

export const donationsSuccess: DonationsSuccessAction = (payload) => ({
  type: DonationsActionTypes.SUCCESS,
  payload,
});

export const donationsFailure: DonationsFailureAction = (payload) => ({
  type: DonationsActionTypes.FAILURE,
  payload,
});
