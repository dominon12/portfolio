import { TechGroup } from "./../../Types/ApiTypes";

export enum TechnologiesActionTypes {
  FETCHING = "TECHNOLOGIES_FETCHING",
  SUCCESS = "TECHNOLOGIES_SUCCESS",
  FAILURE = "TECHNOLOGIES_FAILURE",
}

export type TechnologiesFetchingAction = () => {
  type: TechnologiesActionTypes.FETCHING;
};

export type TechnologiesSuccessAction = (payload: TechGroup[]) => {
  type: TechnologiesActionTypes.SUCCESS;
  payload: TechGroup[];
};

export type TechnologiesFailureAction = (payload: unknown) => {
  type: TechnologiesActionTypes.FAILURE;
  payload: unknown;
};

export type TechnologiesAction = ReturnType<
  | TechnologiesFetchingAction
  | TechnologiesSuccessAction
  | TechnologiesFailureAction
>;
