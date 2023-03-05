import {
  ActiveItem,
  Avatar,
  ContainerDashBoard,
  Item,
  SidebarFooter,
  Sidebar,
  SidebarHeader,
  Content,
  Header,
  BoxHeaderRight,
  BoxHeaderLeft,
  Body,
} from "./DashBoard.styled";
import IconClose from "../../assets/salir.svg";
import IconFlecha from "../../assets/flecha_abajo.svg";
import IconLogo from "../../assets/logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  listRoutes: {
    icon: string;
    patch: string;
  }[];
  avatar?: string;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashBoard = ({ listRoutes, avatar, setUser }: Props) => {
  const [position, setPosition] = useState(60);
  const navigation = useNavigate();

  useEffect(() => {
    const patch = localStorage.getItem("patch");
    listRoutes.map(
      (item, index) => item.patch === patch && setPosition(60 * (index + 1))
    );
    patch ? navigation(patch) : navigation(listRoutes[0].patch);
  }, []);

  const navigationPage = (index: number, patch: string) => {
    setPosition(60 * index);
    navigation(patch);
    localStorage.setItem("patch", patch);
  };

  const closeSession = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("patch");
    navigation("/");
    setUser(false);
  };

  return (
    <ContainerDashBoard>
      <Sidebar>
        <SidebarHeader>
          <img src={IconLogo} width={40} />
        </SidebarHeader>
        <ActiveItem position={position} />
        {listRoutes.map((item, index) => (
          <Item
            key={index}
            onClick={() => navigationPage(index + 1, item.patch)}
          >
            <img src={item.icon} width={20} />
          </Item>
        ))}

        <SidebarFooter>
          <img
            src={IconClose}
            width={20}
            style={{ position: "relative", left: 23, cursor: "pointer" }}
            onClick={closeSession}
          />
          <Avatar left={true} card={false} imagenAvatar={avatar} />
        </SidebarFooter>
      </Sidebar>
      <Content>
        <Header>
          <BoxHeaderLeft>
            <h2>Registrar Vehiculo</h2>
            <p>Viilanueva - Casanare</p>
          </BoxHeaderLeft>
          <BoxHeaderRight>
            <Avatar left={false} card={true} />
            <h3>Yosip Mike Colin</h3>
            <img src={IconFlecha} width={20} style={{ cursor: "pointer" }} />
          </BoxHeaderRight>
        </Header>

        <Body>
          <Outlet />
        </Body>
      </Content>
    </ContainerDashBoard>
  );
};

export default DashBoard;
