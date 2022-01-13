import { TechGroup } from "./../../Types/ApiTypes";

export enum TechnologiesActionTypes {
  FETCH = "TECHNOLOGIES_FETCH",
  SUCCESS = "TECHNOLOGIES_SUCCESS",
  FAILURE = "TECHNOLOGIES_FAILURE",
}

export type TechnologiesFetchAction = () => {
  type: TechnologiesActionTypes.FETCH;
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
  | TechnologiesFetchAction
  | TechnologiesSuccessAction
  | TechnologiesFailureAction
>;
