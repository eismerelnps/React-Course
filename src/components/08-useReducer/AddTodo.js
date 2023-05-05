import React from "react";
import { useForm } from "../../hooks/useForm";

export const AddTodo = ({ handleAddTodo }) => {

    //description is the formValues object desestructured
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  
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
        //call handleAddTodo function withe the new todo
        handleAddTodo( newTodo );
        // reset the form input field
        reset();
      };
  
    return (
    <>
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
    </>
  );
};
