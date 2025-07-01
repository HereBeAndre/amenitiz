import styles from "./index.module.scss";

interface TextInputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ placeholder, onChange }: TextInputProps) => (
  <input
    type="search"
    placeholder={placeholder}
    onChange={onChange}
    className={styles.textInput}
  />
);
