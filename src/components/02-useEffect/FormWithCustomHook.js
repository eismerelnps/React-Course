import React from "react";
import { useForm } from "../../hooks/useForm";


export const FormWithCustomHook = () => {

  const [formValues, handdleInputChange ] = useForm({
    name: '',
    email: '',
    password: '' 
  });

  const { name, email, password } = formValues;

  const handdleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)
  }
 
  return (
    <form onSubmit={handdleSubmit}>
      <h1> FormWithCustomHook </h1>
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
       <input
        type="password"
        name="password"
        className="form-control"
        placeholder="Type your password"
        value={ password }
        onChange={  handdleInputChange }
      />
        <button type="submit" className="btn btn-primary">
        Sign Up
        </button>
    </form>
  );
};
