import {
  IAbout,
  ICareerEvent,
  IContactLink,
  IDonationMethod,
  ILanguage,
  IProject,
  ISkillsGroup,
} from "./../Types/Types";
import portfolioData from "./StoreService";

export function getAbout(): IAbout {
  return portfolioData.about;
}

export function getProjects(): IProject[] {
  return portfolioData.projects;
}

export function getSkills(): ISkillsGroup[] {
  return portfolioData.skills;
}

export function getExperience(): ICareerEvent[] {
  return portfolioData.experience;
}

export function getLanguages(): ILanguage[] {
  return portfolioData.languages;
}

export function getContactLinks(): IContactLink[] {
  return portfolioData.contactLinks;
}

export function getDonationMethods(): IDonationMethod[] {
  return portfolioData.donationMethods;
}
