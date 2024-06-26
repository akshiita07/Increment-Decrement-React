import React, { useState } from "react";

function App() {
  let [counter, changeFnc] = useState(0); //destructure array
  // console.log(`State is: ${state}`);    //outputs array with [value,fnc]

  function incCount() {
    changeFnc(counter + 1);
    // console.log(`On click count=${counter}`);
  }

  function deccCount() {
    changeFnc(counter - 1);
    // console.log(`On click count=${counter}`);
  }

  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={incCount}>+</button>
      <button onClick={deccCount}>-</button>
    </div>
  );
}

export default App;
