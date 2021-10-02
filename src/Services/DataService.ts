import {
  About,
  CareerEvent,
  ContactLink,
  DonationMethod,
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

export function getContactLinks(): ContactLink[] {
  return portfolioData.contactLinks;
}

export function getDonationMethods(): DonationMethod[] {
  return portfolioData.donationMethods;
}
