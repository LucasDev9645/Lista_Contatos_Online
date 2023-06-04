import { Link } from "react-router-dom";

import { BackButton, AddButton, Title } from "../../styles/styles";
import { Field } from "../../styles/styles";
import { Form, RegisterContainer } from "./styles";

const Register = () => {
  return (
    <div>
      <Title>Adicionar Novo Contato</Title>
      <RegisterContainer>
        <Form>
          <div>
            <Field type="text" placeholder="Nome:" />
          </div>
          <div>
            <Field type="email" placeholder="E-mail:" />
          </div>
          <div>
            <Field type="number" placeholder="Telefone:" />
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
