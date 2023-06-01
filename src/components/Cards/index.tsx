import { Button, RemoveButton } from "../../styles/styles";
import { ButtonContainer, CardsContainer, Field } from "./styles";

const Cards = () => {
  return (
    <CardsContainer>
      <div>
        <Field type="text" placeholder="Nome:" />
      </div>
      <div>
        <Field type="text" placeholder="E-mail:" />
      </div>
      <div>
        <Field type="text" placeholder="Telefone:" />
      </div>
      <ButtonContainer>
        <Button>Editar</Button>
        <RemoveButton>Remover</RemoveButton>
      </ButtonContainer>
    </CardsContainer>
  );
};

export default Cards;
