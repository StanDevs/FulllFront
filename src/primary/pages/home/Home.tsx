import "./home.css";
import { FormEvent, useCallback, useMemo, useState } from "react";
import Profile from "../../../domain/Profile/Profile";
import Input from "../../components/Input/Input";
import useDependency from "../../hooks/useDependency";
import ProfileItem from "./components/ProfileItem";

const Home = () => {
  const { profileRepository } = useDependency();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [checkedProfile, setCheckedProfile] = useState<Record<string, boolean>>(
    {}
  );

  const handleSearch = useCallback((e: FormEvent<HTMLInputElement>) => {
    const search = (e.target as HTMLInputElement).value;

    if (search.length > 2) {
      profileRepository.get(search).then((resp) => {
        setProfiles(resp ?? []);
      });
    }

    setCheckedProfile({});
  }, []);

  const handleOnCheck = (profileId: number) => {
    setCheckedProfile((prev) => ({ ...prev, [profileId]: !prev[profileId] }));
  };

  const checkedItemCount = useMemo(
    () => Object.values(checkedProfile).filter((isTrue) => isTrue).length,
    [checkedProfile]
  );

  return (
    <>
      <Input type="search" onInput={handleSearch} debounce={500} />
      {checkedItemCount}
      <div className="profileList">
        {profiles.map((profile) => (
          <ProfileItem
            key={profile.id}
            profile={profile}
            isCheck={!!checkedProfile[profile.id]}
            onCheck={handleOnCheck}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
