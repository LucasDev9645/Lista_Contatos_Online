import { Title } from "../../styles/styles";
import { SideBarContainer } from "./styles";

import LogoContact from "../../assets/img/lista-de-contatos 1.png";

const SideBar = () => {
  return (
    <SideBarContainer>
      <Title>Sua Agenda Online</Title>
      <img src={LogoContact} alt="imagem de uma agenda de contatos" />
    </SideBarContainer>
  );
};

export default SideBar;
