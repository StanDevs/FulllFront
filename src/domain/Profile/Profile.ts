class Profile {
  constructor(
    private _login: string,
    private _id: number,
    private _avatarUrl: string,
    private _profileUrl: string
  ) {}

  get login() {
    return this._login;
  }

  get id() {
    return this._id;
  }

  get avatarUrl() {
    return this._avatarUrl;
  }

  get profileUrl() {
    return this._profileUrl;
  }
}

export default Profile;
