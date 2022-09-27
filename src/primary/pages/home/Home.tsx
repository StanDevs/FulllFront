import { FormEvent, useState } from "react";
import Profile from "../../../domain/Profile/Profile";
import Input from "../../components/Input/Input";
import useDependency from "../../hooks/useDependency";

const Home = () => {
  const { profileRepository } = useDependency();
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const search = (e.target as HTMLInputElement).value;

    if (search.length > 2) {
      profileRepository.get(search).then((resp) => {
        setProfiles(resp ?? []);
      });
    }
  };

  return (
    <>
      <Input type="search" onInput={handleSearch} debounce={500} />
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>{profile.login}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
