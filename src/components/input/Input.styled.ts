import styled from "styled-components";

export const InputComponent = styled.input`
  background-color: white;
  border: none;
  outline: none;
  padding: 10px;
  width: 100%;
  display: block;
  margin: auto;
  border-radius: 3px;
  font-size: 16px;
  font-family: PoppinsRegular;
  border: 1px solid #e5e6ec;
  border-radius: 5px;
  transition: 200ms ease;

  &:focus {
    -webkit-box-shadow: 0px 0px 4px 0px rgba(75, 86, 210, 1);
    -moz-box-shadow: 0px 0px 4px 0px rgba(75, 86, 210, 1);
    box-shadow: 0px 0px 4px 0px rgba(75, 86, 210, 1);
    border: 1px solid #2d26f8;
  }
`;
