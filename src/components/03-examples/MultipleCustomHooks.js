import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHooks = () => {
    //importing useCounter hook
  const { counter, increment, decrement, reset } = useCounter();
    //declare a url to fetch api
  const url = `https://jsonplaceholder.typicode.com/comments`;
    //destructure the response in data, loading and error
  const { data, loading, error } = useFetch(url);
    //desestructure the data
  const { body, name, id } = !!data && data[counter];






  /*
  this will return the frontend
  everery button will set a new value to the index of 
  the data array, incrementing or descrementing the
  counter in 1 or reseting to 0
  */
  /*
  The ternario operator
  if(loading is setted to true ) will show its text 'loading'
  else will show the loaded data
  */
  return (
    <div className="container">
      <div className="container-header">
        <h1 className="inline">MultipleCustomHooks </h1>
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

        
      {
      loading ? (
        <div className="alert alert-info text-center">
          <h1>loading...</h1>
        </div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-3">{body}</p>
          <footer className="blockquote-footer">{name}</footer>
          <div className="circle">{id}</div>
        </blockquote>
      )
      }
    </div>
  );
};
