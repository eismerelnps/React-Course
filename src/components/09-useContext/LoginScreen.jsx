import React from 'react'
import { useForm } from '../../hooks/useForm';
import { UserContext } from './UserContext';
import { useContext } from 'react';

export const LoginScreen = () => {
  //obtain references to userContext
  const { setUser } = useContext(UserContext);

  const [formValues, handdleInputChange ] = useForm({
    name: '',
    email: '',
    password: '' 
  });

  const { name, email, password } = formValues;


const handleSetContext = () => {
  
    setUser({
    name: name,
    email: email,
    password: password 
    })

}

  return (
    <>
        <h1>LoginScreen</h1>
        <hr/>
        <form onSubmit={handleSetContext}>
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
    </>
  )
}
