import { TextInput } from "../../../../shared/TextInput";

import styles from "./index.module.scss";

interface HomeHeaderProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HomeHeader = ({ onInputChange }: HomeHeaderProps) => (
  <div className={styles.homeHeader}>
    <h1>Chess Grandmasters</h1>
    <TextInput
      placeholder="Search player by username"
      onChange={onInputChange}
    />
  </div>
);
