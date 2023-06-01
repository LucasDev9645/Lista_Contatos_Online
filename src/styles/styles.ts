import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --color-white :#FFFFFF;

  --color-gray-100 :#FAFAFA;
  --color-gray-200 :#FCFCFC; 
  --color-gray-300 :#F0F0F0;
  --color-gray-550 :#8B8B8B;  
  --color-gray-600 :#666666;
  --color-gray-700 :#5E5E5E;  
  --color-gray-800 :#3B3B3B;  
  --color-gray-900 :#2F3640;
 
  --color-red-300 :#FFADAD;
  --color-red-600 :#C23616;

  --color-green-500 :#44BD32;
}
   
  * {
  margin:0; 
  padding:0;
  box-sizing:border-box;
  font-family: Roboto, sans-serif ;
  list-style:none;
  text-decoration:none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 16rem auto;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 3.75rem;
  font-family: "Rancho", cursive;
  color: var(--color-gray-800);
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
`;

export const Button = styled.button`
  width: 5rem;
  height: 2rem;
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--color-white);
  border: none;
  cursor: pointer;
  background-color: var(--color-gray-900);
  border-radius: 5px;
`;

export const RemoveButton = styled(Button)`
  background-color: var(--color-red-600);
`;

export default GlobalStyle;
