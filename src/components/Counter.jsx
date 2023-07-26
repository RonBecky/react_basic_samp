import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);

//   const sub1 = () => {
//     setcounter(counter - 1);
//     console.log("succese");
//   };
//   const add1 = () => {
//     setcounter(counter + 1);
//     console.log("succese");
//   };
  return (
    <div>
      <h1>
        <button onClick={() => setcounter(counter - 1)}>-</button>
        {counter}
        <button onClick={() => setcounter(counter + 1)}>+</button>
      </h1>
    </div>
  );
};

export default Counter;
