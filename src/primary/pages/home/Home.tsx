import "./home.css";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import Profile from "../../../domain/Profile/Profile";
import Input from "../../components/Input/Input";
import useDependency from "../../hooks/useDependency";
import ProfileItem from "./components/ProfileItem";

const Home = () => {
  const { profileRepository } = useDependency();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [checkedProfile, setCheckedProfile] = useState<Record<number, boolean>>(
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

  const handleOnCheck = useCallback(
    (profileId: number) => {
      setCheckedProfile((prev) => ({ ...prev, [profileId]: !prev[profileId] }));
    },
    [checkedProfile]
  );

  const handleSelectAll = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const ids = profiles.map((profile) => profile.id);
      const allCheckedObj: Record<string, boolean> = {};
      ids.forEach(
        (id) => (allCheckedObj[id] = (e.target as HTMLInputElement).checked)
      );
      setCheckedProfile(allCheckedObj);
    },
    [profiles]
  );

  const handleDeleteCheckedItems = useCallback(() => {
    setProfiles((prev) => prev.filter((p) => !checkedProfile[p.id]));
  }, [checkedProfile, profiles]);

  const checkedItemCount = useMemo(
    () => Object.values(checkedProfile).filter((isTrue) => isTrue).length,
    [checkedProfile]
  );

  useEffect(() => {
    setCheckedProfile({});
  }, [profiles]);

  return (
    <>
      <Input type="search" onInput={handleSearch} debounce={500} />
      {checkedItemCount}
      <Input type="checkbox" onChange={handleSelectAll} />
      <button onClick={handleDeleteCheckedItems}>Delete</button>
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
