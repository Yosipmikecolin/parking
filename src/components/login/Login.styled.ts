import styled from "styled-components";

export const ContainerLogin = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #e4e3e8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const LoginComponent = styled.form`
  background-color: white;
  padding: 20px;
  width: 400px;
  margin: auto;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(158, 158, 158, 1);
  -moz-box-shadow: 0px 0px 3px 0px rgba(158, 158, 158, 1);
  box-shadow: 0px 0px 3px 0px rgba(158, 158, 158, 1);
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-family: PoppinsSemiBold;
  }

  @media (max-width: 555px) {
    width: 100%;
  }
`;

export const ErrorLogin = styled.span`
  color: red;
  font-size: 14px;
`;
