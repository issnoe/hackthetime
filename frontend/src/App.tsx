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
import { TimerDetailsProvider } from './contexts/Timer';

const App = (props: any) => {
  const [toogle, toogleSider] = useState(true);
  const [sizeStopWatcher, setSizeStopWatcher] = useState('small');
  const changeSize = (size) => setSizeStopWatcher(size);
  const stopWatch = <StopWatch />;

  return (
    <>
      <TimerDetailsProvider value={{ sizeStopWatcher, changeSize }}>
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
