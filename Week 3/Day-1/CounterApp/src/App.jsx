import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 15) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>

      <h2 className="count">{count}</h2>

      <div className="buttons">
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>

        <button onClick={increment} disabled={count === 15}>
          +
        </button>
      </div>

      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;