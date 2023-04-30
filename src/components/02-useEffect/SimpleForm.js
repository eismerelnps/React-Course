import React from "react";
import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
   // console.log("Hey");
  }, []);
  useEffect(() => {
   // console.log('Change on form');
  }, [formState]);

  useEffect(() => {
   // console.log('Change on name');
  }, [name]);

 const handdleInputChange = ({ target }) => {
    setFormState({
        ...formState,
        [ target.name ]: target.value
    });
  };
 
  return (
    <div>
      <h1>SimpleForm</h1>
      <hr />
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Type your name"
        autoComplete="off"
        value={ name }
        onChange={  handdleInputChange }
      />
       <input
        type="text"
        name="email"
        className="form-control"
        placeholder="Type your email"
        autoComplete="off"
        value={ email }
        onChange={  handdleInputChange }
      />

      { (name === '123') && < Message />}
    </div>
  );
};
