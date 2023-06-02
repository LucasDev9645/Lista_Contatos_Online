import { useSelector } from "react-redux";

import Cards from "../Cards";
import AddButton from "../AddButton";
import { RootReducer } from "../store";

import { Title } from "../../styles/styles";
import { MainContainer } from "./styles";

const Home = () => {
  const { items } = useSelector((state: RootReducer) => state.contact);

  return (
    <MainContainer>
      <Title>Sua Lista de Contatos</Title>
      <ul>
        {items.map((c) => (
          <li key={c.name}>
            <Cards
              id={c.id}
              name={c.name}
              email={c.email}
              telephone={c.telephone}
            />
          </li>
        ))}
      </ul>
      <AddButton />
    </MainContainer>
  );
};

export default Home;
