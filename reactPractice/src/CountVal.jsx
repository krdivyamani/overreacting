//updater function = A function passed as an argument to setstate() usually
//ex. setYear (y => y + 1)
//Allow for safe updates based on the previous state
//Used with multiple state updates and asynchronous functions
//Good practice to use updater functions

import { useState } from "react";

function CountVal() {
  const [val, setVal] = useState(0);

  function increment() {
    // Uses the CURRENT state to calculate the NEXT state.
    // set functions do not trigger an update.
    // React batches together state updates for performance reasons.
    // NEXT state becomes the CURRENT state after an update.
    // setVal(val + 1);

    // Takes the PENDING state to calculate NEXT state.
    // React puts your updater function in a queue (waiting in line)
    // During the next render, it will call them in the same order.
    setVal((v) => v + 1);
    setVal((v) => v + 1);
    setVal((v) => v + 1);
  }
  function decrement() {
    //setVal(val - 1);

    setVal((v) => v - 1);
    setVal((v) => v - 1);
    setVal((v) => v - 1);
  }
  function reset() {
    setVal(0);

    //setVal((v) => (v = 0));
  }

  return (
    <div>
      <p>Count : {val}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CountVal;
