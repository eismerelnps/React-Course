import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

import "./todoAppStyle.css";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";

//to stablis the initial state of the reducer
const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleAddTodo = ( newTodo ) => {
    dispatch({
        type: 'add',
        payload: newTodo
    });
  }



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


  //set a todo as completed or incomplete
  const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
  }


  //jsx code of the coponent
  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
         < TodoList 
            todos = { todos } 
            handleDelete = { handleDelete} 
            handleToggle = { handleToggle } 
         />
        </div>

        <div className="col-5">
          <AddTodo
            handleAddTodo={ handleAddTodo }
          />
        </div>
      </div>
    </div>
  );
};
