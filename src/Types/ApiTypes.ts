/**
 * Contains interfaces and types to
 * represent api models
 */

import { IButton, IImage } from "./SystemTypes";

/**
 * Profile representation.
 *
 * @export
 * @interface Profile
 */
export interface Profile {
  firstName: string;
  lastName: string;
  jobTitle: string;
  nickname: string;
  cvDescription: string;
  photo: IImage;
  aboutUnits: AboutUnit[];
}

/**
 * Representation of profile's about units
 *
 * @export
 * @interface AboutUnit
 */
export interface AboutUnit {
  pk: number;
  title: string;
  description: string;
  image: IImage;
  button: IButton;
}

/**
 * Project representation
 *
 * @export
 * @interface Project
 */
export interface Project {
  pk: number;
  name: string;
  previewImage?: IImage;
  image: IImage;
  shortDescription: string;
  description: string;
  date: string;
  type: string;
  technologies: Technology[];
  implementationTime: number;
  repository?: string;
  link?: string;
}

/**
 * Represents paginated projects.
 *
 * @export
 * @interface PaginatedProjects
 */
export interface PaginatedProjects {
  count: number;
  totalPages: number;
  results: Project[];
}

/**
 * Represents a technology used
 * to create a project
 *
 * @export
 * @interface Technology
 */
export interface Technology {
  pk: number;
  techGroup: string;
  name: string;
  level: number;
  isRelevant: boolean;
  showAsFilter: boolean;
  showInTable: boolean;
}

/**
 * Represents a group of technologies.
 *
 * @export
 * @interface TechGroup
 */
export interface TechGroup {
  pk: number;
  name: string;
  skills: Technology[];
  showAsSkill: boolean;
}

/**
 * Represents an event in career.
 *
 * @export
 * @interface CareerEvent
 */
export interface CareerEvent {
  pk: number;
  title: string;
  description: string;
  date: string;
  place: string;
  isRelevant: boolean;
}

/**
 * Language representation.
 *
 * @export
 * @interface Language
 */
export interface Language {
  pk: number;
  name: string;
  code: string;
  level: string;
  learningHistory: string;
}

/**
 * Represents a donation method.
 *
 * @export
 * @interface DonationMethod
 */
export interface DonationMethod {
  pk: number;
  comment: string;
  name: string;
  image: IImage;
  link: string;
  isLink?: boolean;
}

/**
 * Represents a contact method.
 *
 * @export
 * @interface ContactMethod
 */
export interface ContactMethod {
  pk: number;
  name: string;
  link: string;
}


/**
 * Represents contact request
 * sent by user.
 *
 * @export
 * @interface ContactRequest
 */
export interface ContactRequest {
  name: string;
  email: string;
  comment?: string;
}

/**
 * Represents error feedback.
 *
 * @export
 * @interface ErrorFeedback
 */
export interface ErrorFeedback {
  comment: string;
}

/**
 * Represent an error happened
 * on the client side.
 *
 * @export
 * @interface ClientError
 */
export interface ClientError {
  name: string;
  message: string;
  componentStack: string;
  stack: string;
  url: string;
  userAgent: string;
}