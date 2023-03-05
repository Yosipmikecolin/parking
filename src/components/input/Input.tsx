import { useState } from "react";
import { InputComponent } from "./Input.styled";

interface Props {
  label?: string;
  value?: string | number;
  name?: string;
  type?: "date" | "number" | "password" | "text" | "file";
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({
  value = "",
  name,
  label,
  type,
  placeholder,
  onChange: onChange,
}: Props) => {
  const [valueInput, setValueInput] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label
        style={{
          color: "#525558",
        }}
      >
        {label}
      </label>
      <InputComponent
        value={valueInput ? valueInput : value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          setValueInput(e.target.value);
          onChange && onChange(e);
        }}
      />
    </div>
  );
};

export default Input;
