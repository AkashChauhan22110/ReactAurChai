import { useState } from "react";
import "./App.css";
const App = () => {
  const [first, setfirst] = useState

  let counter = 5;
  const addValue = () => {
    console.log("Clicked", counter);
    counter = counter + 1;
  };
  return (
    <>
      <div className="container">
        <h1>Chai Aur React</h1>
        <h2>Counter Value: {counter}</h2>
        <div className="div">
          <button onClick={addValue}>Add Value</button>
          <button>Remove Value</button>
        </div>
      </div>
    </>
  );
};

export default App;
