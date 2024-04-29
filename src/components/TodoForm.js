import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  // export: This keyword makes the TodoForm component available for use outside of its file. It allows other files to import and use TodoForm.
  //const TodoForm = ({ addTodo }) => { ... }: This syntax defines a functional component named TodoForm. It's using ES6 arrow function syntax to define the component.
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    //({ addTodo }): This part of the syntax is using object destructuring to extract the addTodo prop from the props object passed to the TodoForm component. This prop represents a function that will be used to add a new todo item.
    setValue("");
    //useState(""): This line initializes state within the TodoForm component. It uses the useState hook from React to create a state variable named value and a function named setValue to update it. The initial value of value is an empty string "".
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What's in your mind?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Plan
      </button>
    </form>
  );
};

//So, overall, this line of code defines a React functional component named TodoForm, which receives a addTodo function as a prop and manages an input field's value using the useState hook.
// Overall, this handleSubmit function is responsible for handling form submissions in the TodoForm component, adding new todo items to the list and clearing the input field afterward.

//This return statement defines the JSX structure of the TodoForm component. JSX allows you to write HTML-like syntax within JavaScript, which gets transformed into regular JavaScript function calls by tools like Babel.

//Overall, this JSX code defines a form with an input field for adding new todo items and a submit button. When the form is submitted, the handleSubmit function is called, which adds the new todo item to the list.
