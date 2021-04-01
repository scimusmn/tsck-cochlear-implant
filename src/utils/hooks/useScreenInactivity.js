import { useState, useEffect } from 'react';

const WAIT = 60000;
const EVENTS = ['click', 'keypress', 'mousemove'];

const useScreenInactivity = () => {
  const [intervalVal, setIntervalVal] = useState();
  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState(
    new Date().getTime(),
  );

  const checkRefresh = () => {
    setTime((currentTime) => {
      if (new Date().getTime() - currentTime >= WAIT) {
        window.location.reload(true);
      }
      return currentTime;
    });
  };

  const updateTime = () => {
    setTime(new Date().getTime());
    setIntervalVal((currentIntervalVal) => {
      clearInterval(currentIntervalVal);
      return setInterval(checkRefresh, WAIT);
    });
  };

  const throttle = (callback, limit) => {
    let wait = false;
    return function executedFunction(...args) {
      if (!wait) {
        callback(...args);
        wait = true;
        setTimeout(() => { wait = false; }, limit);
      }
    };
  };

  useEffect(() => {
    setIntervalVal(setInterval(checkRefresh, WAIT));

    EVENTS.forEach((event) => window.addEventListener(event, throttle(updateTime, 300)));

    return () => {
      EVENTS.forEach((event) => window.removeEventListener(event, throttle(updateTime, 300)));
      clearInterval(intervalVal);
    };
  }, []);

  return null;
};

export default useScreenInactivity;
