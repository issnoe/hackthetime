import React, { useState } from "react";
import ButtonFloat from "./components/core/button-float";
import { DemoStyledComponet } from "./components/core/demo";
import Wrapper from "./components/core/wrapper";
import Fotter from "./components/navigation/footer";
import NavBar from "./components/navigation/navbar/navbar";
import Sider from "./components/navigation/sider";
import EmpyScreen from "./components/screens/empty";
import MainScreen from "./components/screens/main";
import styled from "styled-components";
const App = (props: any) => {
  const [toogle, toogleSider] = useState(true);
  return (
    <React.Fragment>
      <Wrapper>
        <ButtonFloat />
        <NavBar callback={() => toogleSider(!toogle)} />
        <Sider toogle={toogle}>
          <EmpyScreen />
          <DemoStyledComponet></DemoStyledComponet>
        </Sider>
      </Wrapper>
    </React.Fragment>
  );
};
export default App;
