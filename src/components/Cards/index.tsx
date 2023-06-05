import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { remove, edit } from "../store/reducers/contactList";

import { Button, Field, RemoveButton, SaveButton } from "../../styles/styles";
import { ButtonContainer, CardsContainer } from "./styles";
import Contact from "../../models/Contact";

type Props = Contact;

const Cards = ({
  name: originalName,
  email: originalEmail,
  telephone: originalTelephone,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    if (originalName.length > 0) setName(originalName);
    if (originalEmail.length > 0) setEmail(originalEmail);
    if (originalTelephone.length > 0) setTelephone(originalTelephone);
  }, [originalName, originalEmail, originalTelephone]);

  const cancelEdit = () => {
    setIsEdit(false);
    setName(originalName);
    setEmail(originalEmail);
    setTelephone(originalTelephone);
  };

  return (
    <CardsContainer>
      <div>
        <i className="bi bi-person-fill"></i>
        <Field
          type="text"
          placeholder="Nome:"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isEdit}
        />
      </div>
      <div>
        <i className="bi bi-envelope-at-fill"></i>
        <Field
          type="email"
          placeholder="E-mail:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEdit}
        />
      </div>
      <div>
        <i className="bi bi-whatsapp"></i>
        <Field
          type="number"
          placeholder="Telefone:"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          disabled={!isEdit}
        />
      </div>
      <ButtonContainer>
        {isEdit ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    name,
                    email,
                    telephone,
                    id,
                  })
                );
                setIsEdit(false);
              }}
            >
              Salvar
            </SaveButton>
            <RemoveButton onClick={cancelEdit}>Cancelar</RemoveButton>
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
