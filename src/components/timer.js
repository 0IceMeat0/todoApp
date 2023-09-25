import React, { useState, useEffect } from "react";
import { SvgPause, SvgStart, SvgRestart } from "./svg-component";

function Timer({ min, sec }) {
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  const [isActive, setIsActive] = useState(true);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(min);
    setSeconds(sec);
  };

  const toggleTimer = () => {
    if (isActive) {
      pauseTimer();
    } else {
      startTimer();
    }
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          pauseTimer();
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  useEffect(() => {
    if (min > 0 || sec > 0) {
      startTimer();
    }
  }, [min, sec]);

  return (
    <div className="task__clock">
      <div>
        {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}
      </div>
      <div>
        <button onClick={toggleTimer}>
          {isActive ? <SvgPause /> : <SvgStart />}
        </button>
        <button onClick={resetTimer}>
          <SvgRestart />
        </button>
      </div>
    </div>
  );
}

export default Timer;
