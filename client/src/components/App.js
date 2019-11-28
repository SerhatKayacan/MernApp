import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import "../App.css";

const App = props => {
  return (
    <div className="App">
      <div className="container">
        <div className="mt-3">
          <NewTodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
