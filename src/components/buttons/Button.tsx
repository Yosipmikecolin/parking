import { ButtonComponent } from "./Button.styled";

interface Props {
  label: string;
  className?: string;
  onClick?: () => void;
  css?: {
    marginTop?: number;
    display?: string;
    overflow?: string;
    position?: string;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    width?: number;
  };
}

const Button = ({ label, css, className, onClick }: Props) => {
  return (
    <ButtonComponent css={css} className={className} onClick={onClick}>
      {label}
    </ButtonComponent>
  );
};

export default Button;
