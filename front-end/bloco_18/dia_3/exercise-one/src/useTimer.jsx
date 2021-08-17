import { useState, useEffect } from 'react';

const useTimer = () => {
  const [number, setNumber] = useState(0);
  const [multiplo, setMultiplo] = useState(false);

  const multiply = (n) => {
    if (n % 3 === 0 || n % 5 === 0) {
      setMultiplo(true);
    } else {
      return setMultiplo(false);
    }
  };

  const NewSetNumber = () => {
    const newNumber = (Math.random() * 100).toFixed();
    multiply(newNumber);
    setNumber(newNumber);
  };

  useEffect(NewSetNumber, []);

  useEffect(() => {
    if(multiplo) {
      setTimeout(() => {
        setMultiplo(false);
      }, 4000)
    }
  }, [number, multiplo])

  setInterval(NewSetNumber, 10000);

  return {
    number,
    multiplo,
  };
};

export default useTimer;
