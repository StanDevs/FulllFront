import { toProfile, TRestProfile } from "./RestProfile";

describe("ToProfile", () => {
  it("Should transform rest profile to profile", () => {
    // GIVEN
    const restProfil: TRestProfile = {
      login: "login",
      id: 123,
      node_id: "node_id",
      avatar_url: "avatar_url",
      gravatar_id: "gravatar_id",
      url: "url.com",
      html_url: "html_url",
      followers_url: "followers_url",
      gist_url: "gist_url",
      starred_url: "starred_url",
      subscriptions_url: "subscriptions_url",
      organizations_url: "organizations_url",
      repos_url: "repos_url",
      receved_events_url: "receved_events_url",
      type: "type",
      site_admin: "site_admin",
      scord: "score",
    };

    // WHEN
    const profile = toProfile(restProfil);

    // THEN
    expect(profile.id).toBe(restProfil.id);
    expect(profile.login).toBe(restProfil.login);
    expect(profile.avatarUrl).toBe(restProfil.avatar_url);
    expect(profile.profileUrl).toBe(restProfil.html_url);
  });
});
