import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);


  // Increment
  function increment() {
    setCount(count + 1);
  }


  // Decrement
  function decrement() {
    setCount(count - 1);
  }


  // Reset
  function reset() {
    setCount(0);
  }


  return (
    <div className="app">

      <div className="counter">

        <h1>React Counter</h1>

        <div className="count">
          {count}
        </div>

        <div className="buttons">

          <button onClick={increment}>
            Increment
          </button>

          <button onClick={decrement}>
            Decrement
          </button>

          <button onClick={reset}>
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;