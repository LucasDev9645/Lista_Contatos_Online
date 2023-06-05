import { Link } from "react-router-dom";

import styled from "styled-components";

export const Circle = styled(Link)`
  width: 4rem;
  height: 4rem;
  background-color: var(--color-gray-900);
  color: var(--color-white);
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  cursor: pointer;
`;
