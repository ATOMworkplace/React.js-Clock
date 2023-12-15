import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  setInterval(timer, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  function timer() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timer}>Get Time</button>
    </div>
  );
}
export default App;
