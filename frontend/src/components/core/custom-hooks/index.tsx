import { MutableRefObject, useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
  const savedCallback: MutableRefObject<any> = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== 0) {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
