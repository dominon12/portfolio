import {
  CareerEvent,
  ContactMethod,
  DonationMethod,
  Language,
  PaginatedProjects,
  Profile,
  TechGroup,
} from "./../Types/ApiTypes";

/**
 * Initial state representation.
 *
 * @export
 * @interface InitialState
 * @template T
 */
export interface InitialState<T> {
  data: T | null;
  pending: boolean;
  error: unknown;
}

/**
 * Root state representation.
 *
 * @export
 * @interface RootState
 */
export interface RootState {
  about: InitialState<Profile>;
  projects: InitialState<PaginatedProjects>;
  technologies: InitialState<TechGroup[]>;
  career: InitialState<CareerEvent[]>;
  languages: InitialState<Language[]>;
  donations: InitialState<DonationMethod[]>;
  contact: InitialState<ContactMethod[]>;
}
