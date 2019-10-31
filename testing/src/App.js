import React, { useState } from 'react';
import Display from "./components/display";
import Dashboard from "./components/dashboard";
import './App.css';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [hit, setHit] = useState(false);

  function reset() {
    setBalls(0);
    setStrikes(0)
  }

  {
    if (balls === 4) {
      reset();
    }
    if (strikes === 3) {
      reset();
    }
  }


  const strikeHandler = (e) => {
    setStrikes(strikes + 1)
  }

  const ballHandler = (e) => {
    setBalls(balls + 1)
  }

  const foulHandler = (e) => {
    if (strikes < 2) {
      setStrikes(strikes + 1)
    }
  }

  const hitHandler = (e) => {
    setStrikes(0)
    setBalls(0)
  }

  return (
    <div>
      <Display
        strikes={strikes}
        balls={balls} />

      <Dashboard
        strike={strikeHandler}
        ball={ballHandler}
        foul={foulHandler}
        hit={hitHandler} />
    </div>

  )
}

export default App;