import React, {useRef} from "react";



export const FocusScreen = () => {

    const inputref = useRef()

  const handdleClick = () => {
   // inputref.current.select();
  };

  return (
    <div className="container">
      <h1 className="text-center ">FocusScreen</h1>
      <hr />

      <input
      ref={ inputref } 
      className="form-control" 
      placeholder="Type your name" />
      <button className="btn btn-outline-primary" onClick={handdleClick()}>
        Focus
      </button>
    </div>
  );
};
