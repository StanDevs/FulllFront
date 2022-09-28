import ProfileRepository from "./secondary/Profile/ProfileRepository";
import IProfileRepository from "./domain/Profile/iProfileRepository";
import myFetch from "./secondary/_helpers/myFetch";

export interface IDependencies {
  profileRepository: IProfileRepository;
}

const dependencies = (): IDependencies => ({
  profileRepository: new ProfileRepository(myFetch),
});

export default dependencies;
