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
import Toaster from "./components/core/toaster/toaster.c";
import { projects } from "./data/proyects";
import { tasks } from "./data/task";
import Chat from "./Chat";
const App = (props: any) => {
  const [toogle, toogleSider] = useState(true);
  return (
    <React.Fragment>
   <Chat />
    </React.Fragment>
  );
};
export default App;
