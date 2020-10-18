import React from "react";

import "./App.css";

//import DemoStyledComponet from "./componets/demo-styled-components/demo";

import Wrapper from "./componets/basic/wrapper";
import ButtonFloat from "./componets/basic/button-float";
import NavBar from "./componets/navigation/navbar";
import Sider from "./componets/navigation/sider";
import Fotter from "./componets/navigation/footer";

import MainScreen from "./screens/main";
import EmpyScreen from "./screens/empty";

function App() {
  return (
    <React.Fragment>
      <Wrapper>
        <ButtonFloat />
        <NavBar />
        <Sider>
          <MainScreen />
          <Fotter />
        </Sider>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
