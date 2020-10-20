import React from "react";
import ButtonFloat from "./components/core/button-float";
import Wrapper from "./components/core/wrapper";
import Fotter from "./components/navigation/footer";
import NavBar from "./components/navigation/navbar/navbar";
import Sider from "./components/navigation/sider";
import EmpyScreen from "./components/screens/empty";

const App = (props: any) => (
  <React.Fragment>
    <Wrapper>
      <ButtonFloat />
      <NavBar />
      <Sider>
        <EmpyScreen />
        <Fotter />
      </Sider>
    </Wrapper>
  </React.Fragment>
);
export default App;
