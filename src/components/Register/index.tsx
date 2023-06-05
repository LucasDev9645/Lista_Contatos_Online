import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { register } from "../store/reducers/contactList";

import { BackButton, AddButton, Title } from "../../styles/styles";
import { Field } from "../../styles/styles";
import { Form, RegisterContainer } from "./styles";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const addContact = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        telephone,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <Title>Adicionar Novo Contato</Title>
      <RegisterContainer>
        <Form onSubmit={addContact}>
          <div>
            <Field
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nome:"
            />
          </div>
          <div>
            <Field
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="E-mail:"
            />
          </div>
          <div>
            <Field
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              type="number"
              placeholder="Telefone:"
            />
          </div>
          <AddButton>+ Adicionar</AddButton>
        </Form>
        <Link to="/">
          <BackButton>Voltar</BackButton>
        </Link>
      </RegisterContainer>
    </div>
  );
};

export default Register;
