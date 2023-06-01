import { Title } from "../../styles/styles";
import AddButton from "../AddButton";
import Cards from "../Cards";
import { MainContainer } from "./styles";

const contatos = [
  {
    nome: "joão da silva",
    email: "joão@gmail.com",
    telefone: 31985748458,
  },
  {
    nome: "Cintia vieira",
    email: "cintia@gmail.com",
    telefone: 31985745658,
  },
  {
    nome: "Ravizinho",
    email: "ravi@gmail.com",
    telefone: 31984566458,
  },
  {
    nome: "Dona Rute",
    email: "rute@gmail.com",
    telefone: 31985433458,
  },
];

const Home = () => {
  return (
    <MainContainer>
      <Title>Sua Lista de Contatos</Title>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.nome}>
            <Cards
              nome={contato.nome}
              email={contato.email}
              telefone={contato.telefone}
            />
          </li>
        ))}
      </ul>
      <AddButton />
    </MainContainer>
  );
};

export default Home;
