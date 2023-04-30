import React, { useLayoutEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import { useRef } from "react";

import './layout.css';
import { useState } from "react";

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter();
  const url = `https://jsonplaceholder.typicode.com/comments`;
  const { data } = useFetch(url);
  const { body  } = !!data && data[counter];

  const [size, setSize] = useState({});
  const pTag = useRef();

  useLayoutEffect(() => {
    setSize(pTag.current.getBoundingClientRect())
    }, [body])

  return (
    <div className="container">
      <div className="container-header">
        <h1 className="inline">LayoutEffect </h1>
        <div className="button-container">
          <button onClick={() => increment(1)} className="btn btn-primary">
            NEXT
          </button>
          <button className="btn btn-primary" onClick={reset}>
            RESET
          </button>
          <button className="btn btn-primary" onClick={() => decrement(1)}>
            PREV
          </button>
        </div>
        <hr />
      </div>

      <blockquote className="blockquote text-right">
        <p 
        ref={pTag}
        className="mb-3"
        >
            {body}
        </p>
        <prev>
           { JSON.stringify( size, null, 3)}
        </prev>
      </blockquote>
    </div>
  );
};
