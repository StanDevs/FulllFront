import { debounce } from "lodash";
import { FormEvent, useCallback, useState } from "react";
import Profile from "../../../domain/Profile/Profile";
import ProfileRepository from "../../../secondary/Profile/ProfileRepository";
import Input from "../../components/Input/Input";
import useDependency from "../../hooks/useDependency";

const Home = () => {
  const { profileRepository } = useDependency();
  const [search, setSearch] = useState<string>("");
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const debounceFn = useCallback(
    debounce((_search: string) => {
      profileRepository.get(_search).then((resp) => {
        setProfiles(resp);
      });
    }, 500),
    []
  );

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setSearch(value);
    debounceFn(value);
  };

  return (
    <>
      <Input
        type="search"
        value={search}
        onInput={handleSearch}
        debounce={1000}
      />
      <ul>
        {profiles.map((profile) => (
          <li>{profile.login}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
