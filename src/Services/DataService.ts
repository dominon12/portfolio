import { About } from "./../Types/Types";
import portfolioData from "./StoreService";

export function getAbout(): About {
  return portfolioData.about;
}
