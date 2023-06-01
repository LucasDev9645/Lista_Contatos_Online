import { useState } from "react";

import { Button, RemoveButton, SaveButton } from "../../styles/styles";
import { ButtonContainer, CardsContainer, Field } from "./styles";

type Props = {
  nome: string;
  email: string;
  telefone: number;
};

const Cards = ({ nome, email, telefone }: Props) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <CardsContainer>
      <div>
        <Field type="text" placeholder="Nome:" value={nome} />
      </div>
      <div>
        <Field type="email" placeholder="E-mail:" value={email} />
      </div>
      <div>
        <Field type="number" placeholder="Telefone:" value={telefone} />
      </div>
      <ButtonContainer>
        {isEdit ? (
          <>
            <SaveButton>Salvar</SaveButton>
            <RemoveButton onClick={() => setIsEdit(false)}>
              Cancelar
            </RemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEdit(true)}>Editar</Button>
            <RemoveButton>Remover</RemoveButton>
          </>
        )}
      </ButtonContainer>
    </CardsContainer>
  );
};

export default Cards;
