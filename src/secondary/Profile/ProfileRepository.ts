import { toProfile } from "./RestProfile";
import config from "../../config.json";
import IProfileRepository from "../../domain/Profile/iProfileRepository";
import Profile from "../../domain/Profile/Profile";
import { TFetch } from "../_helpers/myFetch";

class ProfileRepository implements IProfileRepository {
  private _fetch: TFetch;
  constructor(_fetch: TFetch) {
    this._fetch = _fetch;
  }

  async get(login: string): Promise<Profile[]> {
    const resp = await this._fetch(
      `${config.url.github_baseurl}/search/users?q=${login}`
    );

    return resp?.items?.map(toProfile) ?? [];
  }
}

export default ProfileRepository;
