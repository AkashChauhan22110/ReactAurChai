import { useState } from "react";
import "./App.css";
const App = () => {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Chai Aur React</h1>
        <h2>Counter Value: {counter}</h2>
        <div className="div">
          <button onClick={addValue}>Add Value</button>
          <button onClick={removeValue}>Remove Value</button>
        </div>
      </div>
    </>
  );
};

export default App;
