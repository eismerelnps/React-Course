import React from "react";
import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(185);
  const [ currency, setCurrency ] = useState({
    usd: 1,
    eur: 0.95
});

const { usd, eur } = currency;

  return (
    <div>
      <h1>CounterWithCustomHook</h1>
      <h2>CUP: {state} </h2>
      <p>USD: {usd}</p>
      <button
        onClick={
          () => { increment(185)
           setCurrency({
             usd: usd + 1,
             eur: eur +1
            })
          }
        }
        className="btn"
      >
        +1
      </button>
      <button onClick={
        () => {
        decrement(185)
        setCurrency({
            usd: usd - 1,
            eur: eur - 1
        })
        }}
         className="btn">
        -1
      </button>
      <button
        onClick={ () => {
            reset()
              setCurrency({
            usd: 1,
            eur: 1
        })
        }
          
        
    }
      >RESET</button>
    </div>
  );
};
