import Profile from "./Profile";

interface IProfileRepository {
  get(login: string): Promise<Profile[]>;
}

export default IProfileRepository;
