import { useState, useEffect } from 'react';

const WAIT = 10000;
const EVENTS = ['mousemove', 'keypress'];

const useScreenInactivity = () => {
  const [intervalVal, setIntervalVal] = useState();
  const [time, setTime] = useState(
    new Date().getTime(),
  );

  const updateTime = () => {
    setTime(new Date().getTime());
    console.log('mouse moved', time);
  };

  // const debounce = (func, wait) => {
  //   let timeout;

  //   return function executedFunction(...args) {
  //     const later = () => {
  //       clearTimeout(timeout);
  //       func(...args);
  //     };

  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //   };
  // };

  useEffect(() => {
    setIntervalVal(setInterval(() => {
      setTime((currentTime) => {
        console.log('time to check', new Date().getTime() - currentTime);
        if (new Date().getTime() - currentTime >= WAIT) {
          console.log('5 seconds up!');
          // window.location.reload(true);
        }
        return currentTime;
      });
    }, WAIT));

    // setInterval(() => console.log('diff', new Date().getTime() - time, time), 1000);

    EVENTS.forEach((event) => window.addEventListener(event, updateTime));

    return () => {
      EVENTS.forEach((event) => window.removeEventListener(event, updateTime));
      clearInterval(intervalVal);
    };
  }, []);
};

export default useScreenInactivity;
