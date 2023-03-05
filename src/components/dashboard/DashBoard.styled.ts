import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: #1913bd;
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContainerDashBoard = styled.main`
  background-color: #f8fafb;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Item = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 13px;
  cursor: pointer;

  @media (max-width: 837px) {
    left: 11px;
  }

  @media (max-width: 465px) {
    left: 9px;
  }
`;

export const ActiveItem = styled.div<{ position: number }>`
  background-color: #2d26f8;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid white;
  padding: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 13px;
  transition: 500ms;
  cursor: pointer;

  &:hover {
    background-color: #0c38e7;
  }

  position: relative;
  top: ${(props) => props.position + "px"};

  @media (max-width: 837px) {
    left: 11px;
  }
  @media (max-width: 465px) {
    left: 9px;
  }
`;

export const SidebarFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SidebarHeader = styled.div`
  width: 100%;
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.div<{
  left: boolean;
  card: boolean;
  imagenAvatar?: string;
}>`
  width: 40px;
  height: 40px;
  background-image: ${(props) =>
    props.imagenAvatar
      ? `url(${props.imagenAvatar})`
      : `url(${"https://i.pinimg.com/564x/fa/46/a2/fa46a26bc9190ebe9a703c379e6ac3b0.jpg"})`};
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  position: relative;
  left: ${(props) => (props.left ? "14px" : "0px")};

  @media (max-width: 391px) {
    width: ${(props) => (props.card ? "20px" : "40px")};
    height: ${(props) => (props.card ? "20px" : "40px")};
  }

  @media (max-width: 837px) {
    left: ${(props) => props.left && "13px"};
  }

  @media (max-width: 465px) {
    left: ${(props) => props.left && "9px"};
  }
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: auto;
`;

export const Header = styled.div`
  width: 90%;
  height: 100px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: center;
  margin: auto;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(176, 180, 189, 1);
  -moz-box-shadow: 0px 0px 3px 0px rgba(176, 180, 189, 1);
  box-shadow: 0px 0px 3px 0px rgba(176, 180, 189, 1);
  overflow: hidden;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    height: 140px;
  }

  @media (max-width: 343px) {
    height: 150px;
    width: 98%;
  }
`;

export const Body = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(176, 180, 189, 1);
  -moz-box-shadow: 0px 0px 3px 0px rgba(176, 180, 189, 1);
  box-shadow: 0px 0px 3px 0px rgba(176, 180, 189, 1);
  overflow: hidden;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const BoxHeaderLeft = styled.div`
  width: 100%;
  color: #0b032e;

  h2 {
    font-family: PoppinsSemiBold;
  }
`;

export const BoxHeaderRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  gap: 20px;

  h3 {
    font-size: 18px;
  }

  @media (max-width: 700px) {
    padding: 0px;
    justify-content: flex-start;
  }

  @media (max-width: 391px) {
    h3 {
      font-size: 13px;
    }
  }
`;
