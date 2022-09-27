class Profile {
  constructor(
    private _login: string,
    private _id: number,
    private _avatarUrl: string
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
}

export default Profile;
