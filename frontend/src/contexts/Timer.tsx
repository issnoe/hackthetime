import React, { createContext } from "react";
const SETTIME = 1800;

export const TimerDetails = createContext({
  taskID: "",
  sizeStopWatcher: "",
  seconds: SETTIME,
  changeSize: (value) => { },
  whatAreYouDoing: (value) => { },
});

export function TimerDetailsProvider(props) {
  return <TimerDetails.Provider {...props} />;
}
