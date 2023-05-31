import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --color-white :#FFFFFF;

  --color-gray-100 :#FAFAFA;
  --color-gray-200 :#F0F0F0;
  --color-gray-500 :#A1A1A1; 
  --color-gray-550 :#8B8B8B;  
  --color-gray-600 :#666666;
  --color-gray-700 :#5E5E5E;  
  --color-gray-800 :#3B3B3B;  
  --color-gray-900 :#2F3640;
 
  --color-red-600 :#FFADAD;
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
  grid-template-columns: 14rem auto;
`;

export default GlobalStyle;