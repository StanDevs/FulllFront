import { toProfile } from "./RestProfile";
import config from "../../config.json";
import IProfileRepository from "../../domain/Profile/iProfileRepository";
import Profile from "../../domain/Profile/Profile";
import myFetch from "../_helpers/myFetch";

class ProfileRepository implements IProfileRepository {
  async get(login: string): Promise<Profile[]> {
    const resp = await myFetch(
      `${config.url.github_baseurl}/search/users?q=${login}`
    );

    return resp.items.map(toProfile);
  }
}

export default ProfileRepository;
