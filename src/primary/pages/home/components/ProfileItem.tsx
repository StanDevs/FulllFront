import "./ProfileItem.css";
import { FormEvent, useCallback } from "react";
import Profile from "../../../../domain/Profile/Profile";
import Input from "../../../components/Input/Input";
import useEditMode from "../../../hooks/useEditMode";

const ProfileItem = ({
  profile,
  isCheck,
  onCheck,
}: {
  profile: Profile;
  isCheck: boolean;
  onCheck: (profileId: number) => any;
}) => {
  const { isEdit } = useEditMode();

  const goToProfile = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      window.open(profile.profileUrl, "_blank");
    },
    [profile]
  );

  const handleCheck = () => {
    if (isEdit) onCheck(profile.id);
  };

  return (
    <div className="profileItem" onClick={handleCheck}>
      {isEdit && <Input type="checkbox" checked={isCheck} readOnly />}
      <div className="profileItem__avatarContainer">
        <img
          className="profileItem__avatar"
          src={profile.avatarUrl}
          alt={`${profile.login} avatar`}
        />
      </div>
      <div className="profileItem__id">{profile.id}</div>
      <div className="profileItem__login">{profile.login}</div>
      <div className="profileItem__buttonContainer">
        <button className="profileItem__button" onClick={goToProfile}>
          View profile
        </button>
      </div>
    </div>
  );
};

export default ProfileItem;
