import React from "react";

import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <div className="timer d-flex justify-content-center align-items-center">
      <div className="d-flex">
        <div className="timer__card mr-3">
          <span>{days}</span>
        </div>
        <div className="timer__card mr-3">
          <span>{hours}</span>
        </div>
        <div className="timer__card mr-3">
          <span>{minutes}</span>
        </div>
        <div className="timer__card">
          <span>{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
