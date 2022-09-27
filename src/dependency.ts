import ProfileRepository from "./secondary/Profile/ProfileRepository";
import IProfileRepository from "./domain/Profile/iProfileRepository";

export interface IDependencies {
  profileRepository: IProfileRepository;
}

const dependencies = (): IDependencies => ({
  profileRepository: new ProfileRepository(),
});

export default dependencies;
