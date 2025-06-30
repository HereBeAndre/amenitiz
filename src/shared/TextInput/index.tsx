import "./index.css";

interface TextInputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ placeholder, onChange }: TextInputProps) => (
  <input
    type="text"
    placeholder={placeholder}
    onChange={onChange}
    className="text-input"
  />
);
