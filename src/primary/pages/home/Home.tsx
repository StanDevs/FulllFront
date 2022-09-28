import "./home.css";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import Profile from "../../../domain/Profile/Profile";
import Input from "../../components/Input/Input";
import useDependency from "../../hooks/useDependency";
import useEditMode from "../../hooks/useEditMode";
import Trash from "../../Assets/Icons/Trash";
import ProfileItem from "./components/ProfileItem/ProfileItem";

const Home = () => {
  const { profileRepository } = useDependency();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const { isEdit } = useEditMode();
  const [checkedProfile, setCheckedProfile] = useState<Record<number, boolean>>(
    {}
  );
  const checkedItemCount = useMemo(
    () => Object.values(checkedProfile).filter((isTrue) => isTrue).length,
    [checkedProfile]
  );

  const handleSearch = useCallback((e: FormEvent<HTMLInputElement>) => {
    const search = (e.target as HTMLInputElement).value;

    if (search.length > 2) {
      profileRepository.get(search).then((resp) => {
        setProfiles(resp ?? []);
      });
    } else {
      setProfiles([]);
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
    const ok = window.confirm(
      `Êtes-vous sûr de vouloir supprimer ${checkedItemCount}`
    );
    if (ok) setProfiles((prev) => prev.filter((p) => !checkedProfile[p.id]));
  }, [checkedProfile, profiles]);

  // const handleDuplicateCheckedItems = useCallback(() => {
  //   setProfiles((prev) =>
  //     prev.flatMap((profile) => {
  //       if (checkedProfile[profile.id]) {
  //         return [profile, profile];
  //       }
  //       return [profile];
  //     })
  //   );
  // }, [profiles, checkedProfile]);

  useEffect(() => {
    setCheckedProfile({});
  }, [profiles]);

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__searchContainer">
          <Input
            type="search"
            placeholder="Github login"
            onInput={handleSearch}
            debounce={500}
          />
        </div>
        {isEdit && (
          <div className="home__actionsContainer">
            <div className="home__selected">
              <Input type="checkbox" onChange={handleSelectAll} />
              <span className="home__checkAllLabel">
                {checkedItemCount} elements selected
              </span>
            </div>
            <div className="home__actions">
              <button
                className="home__delete"
                disabled={checkedItemCount === 0}
                onClick={handleDeleteCheckedItems}
              >
                <Trash />
              </button>
              {/* <button onClick={handleDuplicateCheckedItems}>Duplicate</button> */}
            </div>
          </div>
        )}
      </div>
      <div className="home__profileList">
        {profiles.map((profile) => (
          <ProfileItem
            key={profile.id}
            profile={profile}
            isCheck={!!checkedProfile[profile.id]}
            onCheck={handleOnCheck}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
