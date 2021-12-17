import * as types from "./Types";
import { Profile } from "./../../Types/ApiTypes";

export const addProfileData = (profileData: Profile) => ({
  type: types.ADD_PROFILE_DATA,
  payload: profileData,
});
