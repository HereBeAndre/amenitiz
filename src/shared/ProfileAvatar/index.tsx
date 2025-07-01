import fallbackAvatar from "../../assets/default_avatar.svg";

import styles from "./index.module.scss";

export const ProfileAvatar = ({ avatar }: { avatar: string }) => (
  <img src={avatar || fallbackAvatar} alt="avatar" className={styles.avatar} />
);
