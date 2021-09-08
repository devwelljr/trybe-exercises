import React from 'react';
import useTimer from './useTimer';

function Timer() {
  const { number, multiplo } = useTimer();

  return (
    <>
      <p id="timer">{ number }</p>
      { multiplo ? <p id="acerto">Acertou</p> : null }
    </>
  );
}
 
export default Timer;