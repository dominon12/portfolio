/**
 * Contains functions for accessing to different
 * portfolio's data endpoints.
 */

import {
  IAbout,
  ICareerEvent,
  IContactMethod,
  IDonationMethod,
  ILanguage,
  IProject,
  ISkillsGroup,
} from "../Types/PortfolioDataTypes";
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

export function getContactMethods(): IContactMethod[] {
  return portfolioData.contactMethods;
}

export function getDonationMethods(): IDonationMethod[] {
  return portfolioData.donationMethods;
}
