import { Provider } from "react-redux";

import Home from "./components/Home";
import SideBar from "./components/SideBar";
import store from "./components/store/index";

import GlobalStyle, { Container } from "./styles/styles";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <Home />
      </Container>
    </Provider>
  );
};

export default App;
