import {
  About,
  CareerEvent,
  Language,
  Project,
  TechnologiesGroup,
} from "./../Types/Types";
import portfolioData from "./StoreService";

export function getAbout(): About {
  return portfolioData.about;
}

export function getProjects(): Project[] {
  return portfolioData.projects;
}

export function getTechnologies(): TechnologiesGroup[] {
  return portfolioData.technologies;
}

export function getExperience(): CareerEvent[] {
  return portfolioData.experience;
}

export function getLanguages(): Language[] {
  return portfolioData.languages;
}
