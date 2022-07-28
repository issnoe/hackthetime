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
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'
import styles from './styles.module.css'
import { CheckboxCube } from './components/checkbox/Checkbox';
import { useSelector } from 'react-redux';
import { AppState } from './config/rootReducer';

var gaugeOptions = {
  chart: {
    type: 'solidgauge'
  },

  title: null,


};

// The speed gauge
var chartSpeed = {
  ...gaugeOptions,
  yAxis: {
    min: 0,
    max: 200,
    title: {
      text: 'Speed'
    }
  },

  credits: {
    enabled: false
  },

  series: [{
    name: 'Speed',
    data: [80],
    dataLabels: {
      format:
        '<div style="text-align:center">' +
        '<span style="font-size:25px">{y}</span><br/>' +
        '<span style="font-size:12px;opacity:0.4">km/h</span>' +
        '</div>'
    },
    tooltip: {
      valueSuffix: ' km/h'
    }
  }]

}

// The RPM gauge
var chartRpm = {
  ...gaugeOptions,
  yAxis: {
    min: 0,
    max: 5,
    title: {
      text: 'RPM'
    }
  },

  series: [{
    name: 'RPM',
    data: [1],
    dataLabels: {
      format:
        '<div style="text-align:center">' +
        '<span style="font-size:25px">{y:.1f}</span><br/>' +
        '<span style="font-size:12px;opacity:0.4">' +
        '* 1000 / min' +
        '</span>' +
        '</div>'
    },
    tooltip: {
      valueSuffix: ' revolutions/min'
    }
  }]

}

// Bring life to the dials
/* setInterval(function () {
  // Speed
  var point,
    newVal,
    inc;

  if (chartSpeed) {
    point = chartSpeed.series[0].points[0];
    inc = Math.round((Math.random() - 0.5) * 100);
    newVal = point.y + inc;

    if (newVal < 0 || newVal > 200) {
      newVal = point.y - inc;
    }

    point.update(newVal);
  }

  // RPM
  if (chartRpm) {
    point = chartRpm.series[0].points[0];
    inc = Math.random() - 0.5;
    newVal = point.y + inc;

    if (newVal < 0 || newVal > 5) {
      newVal = point.y - inc;
    }

    point.update(newVal);
  }
}, 2000); */


const App = (props: any) => {
  const [toogle, toogleSider] = useState(true);
  const [sizeStopWatcher, setSizeStopWatcher] = useState('small');
  const changeSize = (size) => setSizeStopWatcher(size);
  const getCicleStatus = () => {
    return localStorage.getItem("done");
  }
  const isLastTaskRest = (storeOldDoneList) => {
    if (storeOldDoneList == '' || storeOldDoneList == null) return false
    const storeOldDoneListJson = JSON.parse(storeOldDoneList);
    const lastElement = storeOldDoneListJson[0];
    return (lastElement.project === "rest" ? false : true)
  }
  const getLastTaskDetails = (storeOldDoneList) => {
    const storeOldDoneListJson = JSON.parse(storeOldDoneList);
    const lastElement = storeOldDoneListJson[0];
    return lastElement
  }
  const whatAreYouDoing = (payload) => {
    if (payload.action === "NEW") {
      localStorage.setItem("task", payload.taskId);
    }
    if (payload.action === "UPDATE") {

      /**
       * Replace with services do handle object on graphql
       */
      const storege = localStorage.getItem("list");
      const id = localStorage.getItem("task");
      const storeOldDoneList = getCicleStatus();

      if (isLastTaskRest(storeOldDoneList)) {
        let storeOldDoneListJson = []
        if (storeOldDoneList) {
          storeOldDoneListJson = JSON.parse(storeOldDoneList);
        }

        localStorage.setItem("done", JSON.stringify([{ time: new Date, project: "rest", }, ...storeOldDoneListJson]))
      }
      else if (storege) {
        const lista = JSON.parse(storege);
        const done = lista.find((element) => {
          if (element.id === id) {
            return element
          }
        })

        let storeOldDoneListJson = []
        if (storeOldDoneList) {
          storeOldDoneListJson = JSON.parse(storeOldDoneList);
        }
        localStorage.setItem("done", JSON.stringify([{ time: new Date, ...done }, ...storeOldDoneListJson]))
      }
      toogleSider(! )
    }
    if (payload.action === "UPDATE_STATUS") {

    }
  };
  const time = useSelector<AppState, any>((state) => state.time);
  console.log(time);


  const stopWatch = function () {
    debugger
    const storeOldDoneList = getCicleStatus();
    return <StopWatch time={time} isRest={isLastTaskRest(storeOldDoneList)} />;

  }
  //const stopWatchRest = <StopWatch time={time} />;

  return (
    <>
      <TimerDetailsProvider value={{ sizeStopWatcher, changeSize, whatAreYouDoing }}>
        {stopWatch()}
        <Wrapper>
          <div className={styles.wrapper}>
            <header className={styles.mainhead}>
              <NavBar callback={() => toogleSider(!toogle)} />
            </header>
            <nav className={styles.mainnav}>

              {/*  <ul>
                <li><a href="">Nav 1</a></li>
                <li><a href="">Nav 2</a></li>
                <li><a href="">Nav 3</a></li>
              </ul> */}
            </nav>
            <article className={styles.content}>
              <EmpyScreen tasks={tasks} />
            </article>
            <aside className={styles.side}>
              {/* Sidebar */}
            </aside>
            <div className={styles.ad}>{/* Advertising */}</div>
            <footer className={styles.mainfooter}>{/* The footer */}</footer> </div>
          {/*    {<MainScreen></MainScreen>} */}
          {/* <NavBar callback={() => toogleSider(!toogle)} />


          <Sider toogle={toogle} projects={projects}>
            <EmpyScreen tasks={tasks} />
            <HighchartsReact
              key={"n"}
              highcharts={Highcharts}
              options={gaugeOptions}
            />
          </Sider> */}
        </Wrapper>
        {/*    <ButtonFloat /> */}
      </TimerDetailsProvider>
    </>
  );
};

export default App;
