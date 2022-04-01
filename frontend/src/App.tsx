import React, { useState } from 'react';
import ButtonFloat from './components/core/button-float';
import { DemoStyledComponet } from './components/core/demo';
import Wrapper from './components/core/wrapper';
import Fotter from './components/navigation/footer';
import NavBar from './components/navigation/navbar/navbar';

import Sider from './components/navigation/sider';
import EmpyScreen from './components/screens/empty';
import MainScreen from './components/screens/main';
import styled from 'styled-components';
import Toaster from './components/core/toaster/toaster.c';
import { projects } from './data/proyects';
import { tasks } from './data/task';
import StopWatch from './components/core/stop-watch/stop-watch.c';
import { useEffect } from 'react';
import { TimerDetailsProvider } from './contexts/Timer';

const App = (props: any) => {
  const [toogle, toogleSider] = useState(true);
  const [sizeStopWatcher, setSizeStopWatcher] = useState('small');
  const changeSize = (size) => setSizeStopWatcher(size);
  const whatAreYouDoing = (payload) => {
    if (payload.action === "NEW") {
      localStorage.setItem("task", payload.taskId);
    }
    if (payload.action === "UPDATE") {

      const storege = localStorage.getItem("list");
      const id = localStorage.getItem("task");

      if (storege) {
        const lista = JSON.parse(storege);

        const done = lista.find((element) => {
          if (element.id === id) {
            return element
          }
        })
        const storeOldDoneList = localStorage.getItem("done");
        let storeOldDoneListJson = []
        if (storeOldDoneList) {
          storeOldDoneListJson = JSON.parse(storeOldDoneList);
        }
        localStorage.setItem("done", JSON.stringify([{ time: new Date, ...done }, ...storeOldDoneListJson]))
      }
    }
  };
  const stopWatch = <StopWatch />;

  return (
    <>
      <TimerDetailsProvider value={{ sizeStopWatcher, changeSize, whatAreYouDoing }}>
        {stopWatch}
        <Wrapper>
          {/*    {<MainScreen></MainScreen>} */}
          <NavBar callback={() => toogleSider(!toogle)} />
          <Sider toogle={toogle} projects={projects}>
            <EmpyScreen tasks={tasks} />
          </Sider>
        </Wrapper>
        <ButtonFloat />
      </TimerDetailsProvider>
    </>
  );
};

export default App;
