import { createContext } from 'react';
const SETTIME = 1800;

// @ts-ignore
export const TimerDetails = createContext({
  sizeStopWatcher: '',
  changeSize: (value) => {},
  seconds: SETTIME,
});

export function TimerDetailsProvider(props) {
  return <TimerDetails.Provider {...props} />;
}
