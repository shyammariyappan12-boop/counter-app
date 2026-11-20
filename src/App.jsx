import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-card">
      <h1>Counter Application</h1>

      <div className="count-display" aria-live="polite">
        {count}
      </div>

      {count === 0 && (
        <p className="limit-message">Minimum limit reached</p>
      )}

      <div className="button-group">
        <button
          type="button"
          className="btn btn-decrement"
          onClick={handleDecrement}
          disabled={count === 0}
        >
          Decrement
        </button>

        <button
          type="button"
          className="btn btn-reset"
          onClick={handleReset}
        >
          Reset
        </button>

        <button
          type="button"
          className="btn btn-increment"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="app-container">
      <Counter />
    </main>
  );
}