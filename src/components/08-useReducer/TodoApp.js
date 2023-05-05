import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

import "./todoAppStyle.css";

//to stablis the initial state of the reducer
const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //description is the formValues object desestructured
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])



  const handleSubmit = (e) => {
    e.preventDefault();

    //validating
    if (description.trim().length <= 3) {
      return;
    }

    //creating a new object with the datas of the new ToDo
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    //creating a action for this ToDO
    const action = {
      type: "add",
      payload: newTodo,
    };
    //Dispatch knows to who reducer send the information
    dispatch(action);
    reset();
  };



  //delete the todo by todo id
  const handleDelete = (todoId) => {
    //action of the call
    const action = {
      type: "remove",
      payload: todoId
    }
    
     // sends action to useReducer
    dispatch( action );
  };


  //jsx code of the coponent
  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {i + 1}. {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>Add toDo</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Learn ...."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
