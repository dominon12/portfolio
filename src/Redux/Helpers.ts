import { InitialState } from "./Types";

/**
 * Creates typed initial state.
 *
 * @returns {InitialState<T>}
 */
export const createInitialState = <T>(): InitialState<T> => ({
  data: null,
  error: null,
  pending: false,
});
