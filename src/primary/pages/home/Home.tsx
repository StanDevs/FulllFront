import "./home.css";
import { FormEvent, useCallback, useState } from "react";
import Profile from "../../../domain/Profile/Profile";
import Input from "../../components/Input/Input";
import useDependency from "../../hooks/useDependency";
import ProfileItem from "./components/ProfileItem";

const Home = () => {
  const { profileRepository } = useDependency();
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const handleSearch = useCallback((e: FormEvent<HTMLInputElement>) => {
    const search = (e.target as HTMLInputElement).value;

    if (search.length > 2) {
      profileRepository.get(search).then((resp) => {
        setProfiles(resp ?? []);
      });
    }
  }, []);

  return (
    <>
      <Input type="search" onInput={handleSearch} debounce={500} />
      <div className="profileList">
        {profiles.map((profile) => (
          <ProfileItem key={profile.id} profile={profile} isCheck={true} />
        ))}
      </div>
    </>
  );
};

export default Home;
