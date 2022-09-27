import Profile from "./Profile";

describe("Profile", () => {
  it("Should have good values", () => {
    // GIVEN
    const login = "login";
    const id = 123;
    const avatarUrl = "avatarurl.com";
    const profileUrl = "profileurl.com";

    // WHEN
    const profile = new Profile(login, id, avatarUrl, profileUrl);

    // THEN
    expect(profile.login).toBe(login);
    expect(profile.id).toBe(id);
    expect(profile.avatarUrl).toBe(avatarUrl);
    expect(profile.profileUrl).toBe(profileUrl);
  });
});
