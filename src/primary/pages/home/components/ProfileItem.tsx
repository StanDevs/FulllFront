import "./ProfileItem.css";
import { useCallback } from "react";
import Profile from "../../../../domain/Profile/Profile";

const ProfileItem = ({
  profile,
  isCheck,
}: {
  profile: Profile;
  isCheck: boolean;
}) => {
  const goToProfile = useCallback(() => {
    window.open(profile.profileUrl, "_blank");
  }, [profile]);

  return (
    <div className="profileItem">
      <input type="checkbox" checked={isCheck} />
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
