import { useEffect, useMemo, useState } from "react";
import {
  ContainerSelect,
  ListSelect,
  Option,
  SelectComponent,
} from "./Select.styled";

interface Props {
  label?: string;
  value?: string;
  data: { id: string; name: string }[];
  onChange?: (...event: any[]) => void;
}

const Select = ({ data, label, value, onChange }: Props) => {
  const [valueSelect, setValueSelect] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (value) {
      setValueSelect(value);
      onChange && onChange(value);
    }
  }, [value]);

  const visibilityList = () => {
    setVisible(!visible);
  };

  return (
    <ContainerSelect>
      <label
        style={{
          color: "#525558",
        }}
      >
        {label}
      </label>
      <SelectComponent value={valueSelect} readOnly onClick={visibilityList} />
      {visible && (
        <ListSelect onClick={visibilityList} label={label}>
          {data.map((item) => (
            <Option
              key={item.id}
              onClick={() => {
                setValueSelect(item.name);
                onChange && onChange(item.name);
              }}
            >
              {item.name}
            </Option>
          ))}
        </ListSelect>
      )}
    </ContainerSelect>
  );
};

export default Select;
