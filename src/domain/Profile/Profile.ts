class Profile {
  private _isCheck = false;
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

  get isCheck() {
    return this._isCheck;
  }

  public toggleIsCheck() {
    this._isCheck = !this._isCheck;
  }
}

export default Profile;
