import Profile from "../../domain/Profile/Profile";

export type TRestProfile = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  gist_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  receved_events_url: string;
  type: string;
  site_admin: string;
  scord: string;
};

export const toProfile = (restProfile: TRestProfile): Profile => {
  return new Profile(restProfile.login, restProfile.id, restProfile.avatar_url);
};
