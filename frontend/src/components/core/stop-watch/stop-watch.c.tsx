import React, { useContext, useEffect, useState } from 'react';
import { TimerDetails } from '../../../contexts/Timer';
import { PlayBeep } from '../../../libs/Sound';
import { useInterval } from '../custom-hooks';
import './stop-watch.css';
const SETTIME = 1800;
const ONE_SECOND = 1000;
export type StopWatchProps = {
  name?: string;
  size?: string;
};

const StopWatch = () => {
  const [seconds, setSeconds] = useState(SETTIME);
  const [delay, setDelay] = useState(ONE_SECOND);

  const { sizeStopWatcher, changeSize, whatAreYouDoing } = useContext(TimerDetails);

  useInterval(() => {
    setSeconds(seconds - 1);
    document.title = transformSecondsToClock(seconds)
    if (seconds < 1) {
      PlayBeep()

    }
    if (seconds == 0) {
      setDelay(ONE_SECOND);
      setSeconds(SETTIME);
      whatAreYouDoing({ action: "UPDATE" })
    }
  }, delay);

  /**
   * @example
   * 120 seconds => 2:00
   */
  const transformSecondsToClock = (seconds: number) => {
    let minutes = seconds / 60;
    const segundos = seconds % 60;
    minutes = parseInt(minutes.toString(), 10);
    const secondsMask = segundos < 10 ? `0${segundos}` : segundos;
    const minutesMask = minutes < 10 ? `0${minutes}` : minutes;
    return `${minutesMask}:${secondsMask}`;
  };

  return (
    <div>
      <div className={`clock ${sizeStopWatcher} onwork`}>
        {transformSecondsToClock(seconds)}
        <button
          className="button-collapce"
          onClick={() => {
            const s = sizeStopWatcher === 'small' ? 'full-screen' : 'small';
            console.log(sizeStopWatcher, s);

            changeSize(s);
          }}
        >
          collapce
        </button>
        <button
          onClick={() => {
            setDelay(ONE_SECOND);
          }}
        >
          PLAY
        </button>
        <button
          onClick={() => {
            setDelay(0);
          }}
        >
          PAUSE
        </button>
        <button
          onClick={() => {
            setDelay(ONE_SECOND);
            setSeconds(SETTIME);
          }}
        >
          STOP
        </button>
      </div>
    </div>
  );
};

export default StopWatch;


