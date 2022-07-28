import React, { useContext, useEffect, useState } from 'react';
import { TimerDetails } from '../../../contexts/Timer';
import { PlayBeep, PlayBeep_StartWork, PlayBeep_TakeRest } from '../../../libs/Sound';
import { TimeState } from '../../../modules/time';
import { useInterval } from '../custom-hooks';
import './stop-watch.css';
/**
 * 1800 => 30 min
 * 300 => 5 min
 */
const TIME_TASK_FOCUS = 10;// => 30 minutos
const TIME_REST = 5;
const ONE_SECOND = 1000;
export type StopWatchProps = {
  name?: string;
  size?: string;
};
export type StopWatchXProps = {
  time?: any;
  isRest: boolean;
};
/**
 * 
 * @param time 
 * @description ´
 *  - identificar ciclo
 *  - ["",""]
 *  - interval 
 * 
 * @returns 
 */
const StopWatch = ({ time, isRest }: StopWatchXProps) => {
  console.log(isRest);

  const setttingTimeSeconds = isRest ? TIME_TASK_FOCUS : TIME_REST;
  const [seconds, setSeconds] = useState(setttingTimeSeconds);
  const [delay, setDelay] = useState(ONE_SECOND);

  const { sizeStopWatcher, changeSize, whatAreYouDoing } = useContext(TimerDetails);

  useInterval(() => {
    setSeconds(seconds - 1);
    document.title = transformSecondsToClock(seconds)
    if (seconds == 1) {
      if (isRest) {
        PlayBeep_StartWork()
      } else {
        PlayBeep_TakeRest()
      }
    }
    if (seconds == 0) {
      setDelay(ONE_SECOND);
      setSeconds(setttingTimeSeconds);
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
        <p style={{ fontSize: '1rem' }}>{
          time.description}</p>
        <button
          className="button-collapce"
          onClick={() => {
            const s = sizeStopWatcher === 'small' ? 'full-screen' : 'small';
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
            setSeconds(setttingTimeSeconds);
          }}
        >
          STOP
        </button>
      </div>
    </div>
  );
};

export default StopWatch;


