import React, { useState } from 'react';
import './App.css';
import Congrats from "./Congrats";

function App() {

  const [numberOfClicks, countClicks] = useState(0);

  function handleClick () {
    countClicks(numberOfClicks + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Number of clicks: {numberOfClicks}</p>
      {(numberOfClicks === 1) && <Congrats/>}
    </div>
  );
}

export default App;
