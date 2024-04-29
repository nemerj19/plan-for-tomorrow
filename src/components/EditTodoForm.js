import React, { useState } from "react";
// Import Statements: The component imports necessary modules, including React for creating components and useState for managing state within functional components.
//Component Definition: The EditTodoForm component is defined as a functional component that takes two props:
export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
//editTodo: A function used to update the todo item with the edited task.
//task: An object representing the todo item being edited.
  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

//The code  provided defines a React functional component named EditTodoForm using ES6 arrow function syntax. This component is responsible for rendering a form used to edit an existing todo item.

//Component Definition: The EditTodoForm component is defined as a functional component that takes two props:
//editTodo: A function used to update the todo item with the edited task.
//task: An object representing the todo item being edited.
//State Management: The component uses the useState hook to create state for managing the value of the input field. The initial state (value) is set to the description of the task being edited (task.task).
//Event Handling:
//The handleSubmit function is triggered when the form is submitted. It prevents the default form submission behavior, calls the editTodo function with the new task description (value) and the id of the task being edited, and then clears the input field.
//Rendered Content:
//The component renders a <form> element with the class name "TodoForm". It attaches the handleSubmit function to the onSubmit event of the form.
//Inside the form, an <input> element of type "text" is rendered with the class name "todo-input". The value of the input field is controlled by the value state, and its change is handled by the onChange event, which updates the value state with the new input value.
//Additionally, a <button> element with the class name "todo-btn" is rendered for submitting the form. When clicked, it triggers the form submission.

//this component provides a form interface for users to edit the task description of an existing todo item.
