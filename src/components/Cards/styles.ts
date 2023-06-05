import styled from "styled-components";

export const CardsContainer = styled.div`
  max-width: 100%;
  height: 14.2rem;
  margin: 2rem 4.6rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--color-gray-100);
  border-left: 3px solid var(--color-red-300);
  border-right: 3px solid var(--color-red-300);

  div {
    display: flex;
    align-items: center;

    i {
      margin-right: 0.4rem;
      font-size: 1.4rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 0.7rem;
  display: flex;
  justify-content: space-between;
`;
