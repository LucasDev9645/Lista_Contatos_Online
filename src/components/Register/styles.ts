import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 70%;
  height: 40rem;
`;

export const Form = styled.form`
  margin: 2rem auto;
  width: 100%;
  height: 18rem;
  background-color: var(--color-gray-100);
  padding: 1rem;
  border-radius: 10px;
  border-left: 5px solid var(--color-red-300);
  border-right: 4px solid var(--color-red-300);

  div {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      margin-right: 0.5rem;
      font-size: 1.8rem;
    }
  }
`;
