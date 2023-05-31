import Home from "./components/Home";
import SideBar from "./components/SideBar";

import GlobalStyle, { Container } from "./styles/styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <Home />
      </Container>
    </>
  );
};

export default App;
