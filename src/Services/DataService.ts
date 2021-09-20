import { About, Project } from "./../Types/Types";
import portfolioData from "./StoreService";

export function getAbout(): About {
  return portfolioData.about;
}

export function getProjects(): Project[] {
  return portfolioData.projects;
}
