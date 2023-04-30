import { useState } from "react";
import React from "react";

export const CounterApp = () => {
  const [ state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    caounter4:40
  });

  const { counter1, counter2 } = state;

  return (
    <div>
      <h1>counter1 {counter1}</h1>
      <h1>counter2 {counter2}</h1>
      <hr />
      <button
      className="btn btn-primary"
        onClick={() => {
          setState({
            ...state,
            counter1: counter1 + 10,
          });
        }}
      >+10</button>
    </div>
  );
};
