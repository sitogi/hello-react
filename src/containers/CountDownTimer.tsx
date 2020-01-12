import React, { FC, useState, useEffect } from "react";

import CountDownTimerComponent from "../components/CountDownTimer";

// Custom Hook。 複数の Hook をまとめて一つの関数として扱うことができる。
// Custom Hook は useXxxxxx という名前にするという規約がある。
const useTimer = (limitSec: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limitSec);

  const tick = () => setTimeLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1));
  const reset = () => setTimeLeft(limitSec);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  });

  return [timeLeft, reset];
};

const CountDownTimerContainer: FC = () => {
  const LIMIT = 60;
  const [timeLeft, reset] = useTimer(LIMIT);

  // この container 側で、描画担当の component を呼び出してレンダリングして返す。
  return <CountDownTimerComponent timeLeft={timeLeft} reset={reset} />;
};

export default CountDownTimerContainer;
