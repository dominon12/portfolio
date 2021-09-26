import {
  About,
  CareerEvent,
  Language,
  Project,
  SkillsGroup,
} from "./../Types/Types";
import portfolioData from "./StoreService";

export function getAbout(): About {
  return portfolioData.about;
}

export function getProjects(): Project[] {
  return portfolioData.projects;
}

export function getSkills(): SkillsGroup[] {
  return portfolioData.skills;
}

export function getExperience(): CareerEvent[] {
  return portfolioData.experience;
}

export function getLanguages(): Language[] {
  return portfolioData.languages;
}
