import { useState } from "react";
import { useDispatch } from "react-redux";

import { remove } from "../store/reducers/contactList";

import { Button, RemoveButton, SaveButton } from "../../styles/styles";
import { ButtonContainer, CardsContainer, Field } from "./styles";
import Contact from "../../models/Contact";

type Props = Contact;

const Cards = ({ id, name, email, telephone }: Props) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  return (
    <CardsContainer>
      <div>
        <Field type="text" placeholder="Nome:" value={name} />
      </div>
      <div>
        <Field type="email" placeholder="E-mail:" value={email} />
      </div>
      <div>
        <Field type="number" placeholder="Telefone:" value={telephone} />
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
            <RemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </RemoveButton>
          </>
        )}
      </ButtonContainer>
    </CardsContainer>
  );
};

export default Cards;
