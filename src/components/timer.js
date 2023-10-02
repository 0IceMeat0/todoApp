import React, { useState, useEffect } from "react";
import { SvgPause, SvgStart, SvgRestart } from "./svg-component";

function Timer({ min, sec }) {
  const [minutes, setMinutes] = useState(min ? parseInt(min, 10) : 0);
  const [seconds, setSeconds] = useState(sec ? parseInt(sec, 10) : 0);
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
    setSeconds(sec || 0); // Устанавливаем 0, если sec не указан
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
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 0) {
                pauseTimer();
                return 0;
              }
              return prevMinutes - 1;
            });
            return 59;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

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
