import Profile from "./Profile";

describe("Profile", () => {
  it("Should have good values", () => {
    // GIVEN
    const login = "login";
    const id = 123;
    const avatarUrl = "avatarurl.com";

    // WHEN
    const profile = new Profile(login, id, avatarUrl);

    // THEN
    expect(profile.login).toBe(login);
    expect(profile.id).toBe(id);
    expect(profile.avatarUrl).toBe(avatarUrl);
  });
});
