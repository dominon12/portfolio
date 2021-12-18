import {
  CareerEvent,
  Language,
  PaginatedProjects,
  Profile,
  TechGroup,
} from "./../Types/ApiTypes";

export interface InitialState<T> {
  data: T | null;
  pending: boolean;
  error: unknown;
}

export interface RootState {
  about: InitialState<Profile>;
  projects: InitialState<PaginatedProjects>;
  technologies: InitialState<TechGroup[]>;
  career: InitialState<CareerEvent[]>;
  languages: InitialState<Language[]>;
}
