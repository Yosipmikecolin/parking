import styled from "styled-components";

export const ButtonComponent = styled.button<{
  css:
    | {
        marginTop?: number;
        display?: string;
        overflow?: string;
        position?: string;
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
        width?: number;
      }
    | undefined;
}>`
  font-family: PoppinsMedium;
  background-color: #2d26f8;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  height: 43px;
  width: ${(props) => (props.css?.width ? props.css?.width + "px" : "100%")};
  cursor: pointer;
  transition: 500ms;
  margin-top: ${(props) =>
    props.css?.marginTop ? props.css?.marginTop + "px" : "0px"};
  display: ${(props) => (props.css?.display ? props.css?.display : "block")};
  overflow: ${(props) =>
    props.css?.overflow ? props.css.overflow : "visible"};
  position: ${(props) =>
    props.css?.position ? props.css?.position : "relative"};
  top: ${(props) => (props.css?.top ? props.css?.top : "")};
  left: ${(props) => (props.css?.left ? props.css?.left : "")};
  right: ${(props) => (props.css?.right ? props.css?.right : "")};
  bottom: ${(props) => (props.css?.top ? props.css?.bottom : "")};

  &:hover {
    background-color: #1d17b6;
  }
`;
