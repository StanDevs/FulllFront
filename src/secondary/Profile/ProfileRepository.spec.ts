import ProfileRepository from "./ProfileRepository";
import { toProfile } from "./RestProfile";

describe("Profile repository", () => {
  it("Should get profiles", async () => {
    // GIVEN
    const restProfile = (numb: number) => ({
      login: "login" + numb,
      id: 123,
      node_id: "node_id",
      avatar_url: "avatar_url" + numb,
      gravatar_id: "gravatar_id",
      url: "url.com",
      html_url: "html_url" + numb,
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
    });
    const profile1 = restProfile(Math.random());
    const profile2 = restProfile(Math.random());
    const profile3 = restProfile(Math.random());
    const mockedFetch = (url: string) =>
      Promise.resolve({ items: [profile1, profile2, profile3] });
    const profileRepository = new ProfileRepository(mockedFetch);

    // WHEN
    const get = await profileRepository.get("login");

    // THEN
    expect(get).toEqual([
      toProfile(profile1),
      toProfile(profile2),
      toProfile(profile3),
    ]);
  });

  it("Should return empty array if not profile found", async () => {
    // GIVEN
    const mockedFetch = (url: string) => Promise.resolve();
    const profileRepository = new ProfileRepository(mockedFetch);

    // WHEN
    const get = await profileRepository.get("login");

    // THEN
    expect(get).toEqual([]);
  });
});
