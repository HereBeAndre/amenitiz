import fallbackAvatar from "../../assets/default_avatar.svg";

import "./index.css";

export const ProfileAvatar = ({ avatar }: { avatar: string }) => (
  <img
    src={avatar || fallbackAvatar}
    alt={avatar ? "User avatar" : "Default avatar"}
    className="avatar"
  />
);
