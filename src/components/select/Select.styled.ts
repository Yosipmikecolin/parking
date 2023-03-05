import styled from "styled-components";

export const SelectComponent = styled.input`
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
  cursor: pointer;

  &:focus {
    -webkit-box-shadow: 0px 0px 4px 0px rgba(75, 86, 210, 1);
    -moz-box-shadow: 0px 0px 4px 0px rgba(75, 86, 210, 1);
    box-shadow: 0px 0px 4px 0px rgba(75, 86, 210, 1);
    border: 1px solid #2d26f8;
  }
`;

export const ContainerSelect = styled.div`
  position: relative;
`;

export const ListSelect = styled.div<{ label?: string }>`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: auto;
  position: absolute;
  width: 100%;
  z-index: 10;
  gap: 5px;
  top: ${(props) => (props.label ? "78px" : "55px")};
  -webkit-box-shadow: 0px 0px 4px 0px rgba(107, 107, 107, 1);
  -moz-box-shadow: 0px 0px 4px 0px rgba(107, 107, 107, 1);
  box-shadow: 0px 0px 4px 0px rgba(107, 107, 107, 1);

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export const Option = styled.option`
  background-color: #ececec;
  color: black;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    background-color: #2d26f8;
    color: white;
  }
`;
