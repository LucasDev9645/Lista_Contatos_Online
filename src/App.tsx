import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import SideBar from "./components/SideBar";
import store from "./components/store/index";

import GlobalStyle, { Container } from "./styles/styles";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Container>
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novo" element={<Register />} />
          </Routes>
        </Container>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
