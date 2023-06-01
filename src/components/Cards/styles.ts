import styled from "styled-components";

export const CardsContainer = styled.div`
  max-width: 100%;
  height: 13.75rem;
  margin: 2rem 4.6rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--color-gray-100);
`;

export const Field = styled.input`
  font-size: 1rem;
  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 5px;
  margin-bottom: 0.6rem;
  background-color: var(--color-gray-300);
  padding-left: 0.5rem;

  ::placeholder {
    font-size: 1rem;
    color: var(--color-gray-800);
    font-weight: 700;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;
