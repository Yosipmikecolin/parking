import { FC, ReactNode } from "react";
import { FieldErrors } from "react-hook-form";

interface Props {
  errors: FieldErrors;
  index: string;
  secondIndex?: string;
}

export const ErrorMessage: FC<Props> = ({ errors, index, secondIndex }) => {
  let value;
  let message;
  if (secondIndex) {
    value = errors[index as keyof typeof errors];
    if (value) {
      // @ts-ignore
      const temp = value[secondIndex];
      message = temp?.message;
    }
  } else {
    value = errors[index as keyof typeof errors];
    message = value?.message;
  }
  return (
    <div
      style={{
        color: "#FF0303",
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: "10px",
      }}
    >
      {message as keyof ReactNode}
    </div>
  );
};
