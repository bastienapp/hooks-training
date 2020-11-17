import React, { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(10);
  const [run, setRun] = useState(false);

  const start = () => {
    setRun(!run);
  };

  useEffect(() => {
    console.log('useEffect');
    let timer = null;
    if (time === 0) {
      setRun(false);
      console.log('timer stops itself');
    } else if (run) {
      console.log('set timer');
      timer = setTimeout(() => {
        setTime(time - 1);
        console.log('change time');
      }, 1000);
    } else {
      console.log('stop timer');
    }

    return function cleanup() {
      console.log('clear timer');
      clearTimeout(timer);
    };
  }, [time, run]);

  return (
    <div className='Timer'>
      <div>{time}</div>
      <button onClick={() => setTime(Math.max(time - 1, 0))}>-1s</button>
      <button onClick={() => setTime(time + 1)}>+1s</button>
      <button onClick={() => start()}>{run ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default Timer;
