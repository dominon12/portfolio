import { Profile } from "./../Types/ApiTypes";

export interface InitialState<T> {
  data: T | null;
  pending: boolean;
  error: unknown;
}

export interface RootState {
  about: InitialState<Profile>;
}
