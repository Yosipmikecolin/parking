import { useState } from "react";
import Button from "../buttons/Button";
import Input from "../input/Input";
import { ContainerLogin, ErrorLogin, LoginComponent } from "./Login.styled";

interface Props {
  onChange: (values: { user: string; password: string }) => void;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ onChange, setUser }: Props) => {
  const [activeError1, setActiveError1] = useState(false);
  const [activeError2, setActiveError2] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const password = e.currentTarget.password;
    const user = e.currentTarget.user;
    const credentials = { user: user.value, password: password.value };

    if (!user.value) {
      setActiveError1(true);
    } else {
      setActiveError1(false);
    }

    if (!password.value) {
      setActiveError2(true);
    } else {
      setActiveError2(false);
    }

    if (!activeError1 && !activeError2) {
      onChange(credentials);
      setUser(true);
    }
  };

  return (
    <ContainerLogin>
      <LoginComponent onSubmit={handleSubmit}>
        <h1>Iniciar Sesión </h1>
        <Input placeholder="Usuario" name="user" />
        {activeError1 && <ErrorLogin>Campo requerido</ErrorLogin>}
        <Input placeholder="Contraseña" name="password" type="password" />
        {activeError2 && <ErrorLogin>Campo requerido</ErrorLogin>}
        <Button label="Iniciar Sesion" />
      </LoginComponent>
    </ContainerLogin>
  );
};

export default Login;
