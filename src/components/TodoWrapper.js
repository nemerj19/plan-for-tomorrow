import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

uuidv4();
// The uuidv4(); line seems to be a standalone statement that generates a UUID (Universally Unique Identifier) using the v4 algorithm
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  // The ...todos syntax is known as the "spread operator" in JavaScript. It's used here within an array literal to create a new array by copying the elements of the todos array.
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //The filter method in JavaScript is a higher-order array function used to create a new array with all elements that pass a certain condition. In the context of the deleteTodo function, todos.filter((todo) => todo.id !== id) is using the filter method to create a new array containing all todo items except the one with the specified id.
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  //This function effectively toggles the editing state of the todo item with the specified id, allowing users to switch between viewing the todo item and editing its task description.
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  // The editTask function is responsible for updating the task description of a todo item with the specified id. Here's how it works:

  return (
    <div className="TodoWrapper">
      <h1>Plans for tomorrow!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
//This is the JSX (JavaScript XML) code returned by the TodoWrapper component. It represents the structure and content of the component that will be rendered in the UI. Here's a breakdown of the JSX code:
// <div className="TodoWrapper">: This creates a div element with the class name "TodoWrapper", serving as the main container for the todo list.
// <h1>Plans for tomorrow!</h1>: This renders a heading with the text "Plans for tomorrow!" above the todo list.
// <TodoForm addTodo={addTodo} />: This renders a TodoForm component, passing the addTodo function as a prop to allow users to add new todo items.
// {todos.map((todo, index) => ...)}: This maps over the todos array using the map method, generating JSX for each todo item in the list.a. If todo.isEditing is true, it renders an EditTodoForm component with the editTask function passed as a prop for editing the todo item.b. If todo.isEditing is false, it renders a Todo component for displaying the todo item's task description. It passes various props such as task, toggleComplete, deleteTodo, and editTodo to handle interactions with the todo item.
// </div>: This closes the main div element, ending the JSX structure of the TodoWrapper component.
// Overall, this JSX code defines the layout and behavior of the TodoWrapper component, including rendering the heading, todo form, and a list of todo items with options to edit, delete, and mark them as complete.
