import { Title } from "../../styles/styles";
import AddButton from "../AddButton";
import Cards from "../Cards";
import { MainContainer } from "./styles";

const Home = () => {
  return (
    <MainContainer>
      <Title>Sua Lista de Contatos</Title>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <AddButton />
    </MainContainer>
  );
};

export default Home;
