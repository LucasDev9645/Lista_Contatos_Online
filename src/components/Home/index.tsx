import { useSelector } from "react-redux";

import Cards from "../Cards";
import AddButton from "../AddButton";
import { RootReducer } from "../store";

import { Title } from "../../styles/styles";
import { MainContainer } from "./styles";

const Home = () => {
  const { contact } = useSelector((state: RootReducer) => state);

  return (
    <MainContainer>
      <Title>Sua Lista de Contatos</Title>
      <ul>
        {contact.map((c) => (
          <li key={c.name}>
            <Cards nome={c.name} email={c.email} telefone={c.telephone} />
          </li>
        ))}
      </ul>
      <AddButton />
    </MainContainer>
  );
};

export default Home;
