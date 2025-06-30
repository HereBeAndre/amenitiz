import { TextInput } from "../../../../shared/TextInput";

import "./index.css";

interface HomeHeaderProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HomeHeader = ({ onInputChange }: HomeHeaderProps) => (
  <div className="home-header">
    <h1>Chess Grandmasters</h1>
    <TextInput
      placeholder="Search player by username"
      onChange={onInputChange}
    />
  </div>
);
