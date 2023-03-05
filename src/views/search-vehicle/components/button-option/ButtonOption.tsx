import { useState } from "react";
import "./ButtonOption.css";

interface Props {
  label: string;
  name: "plate" | "date" | "value";
  options: {
    plate: boolean;
    date: boolean;
    value: boolean;
  };
  setOptions: React.Dispatch<
    React.SetStateAction<{
      plate: boolean;
      date: boolean;
      value: boolean;
    }>
  >;
}

const ButtonOption = ({ label, setOptions, options, name }: Props) => {
  const [active, setActive] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        setActive(!active);
        if (name === "date") {
          setOptions({ plate: false, value: false, date: true });
        } else if (name === "plate") {
          setOptions({ plate: true, value: false, date: false });
        } else if (name === "value") {
          setOptions({ plate: false, value: true, date: false });
        }
      }}
      className={
        options[name] ? "buttton-option-active" : "buttton-option-disable"
      }
    >
      {label}
    </button>
  );
};

export default ButtonOption;
