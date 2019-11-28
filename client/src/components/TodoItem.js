import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodoDone, removeTodo } from "../actions/index";

const TodoItem = props => {
  const dispatch = useDispatch();
  const { todo } = props; // todo = props.todo

  return (
    <li className="list-group-item">
      <input
        onChange={
          event => dispatch(toggleTodoDone(event.target.checked, todo._id)) //action çalıştır, checked true yada false
        }
        type="checkbox"
        checked={todo.done} //true yada false
      />
      <span className={todo.done ? "done" : ""}>{todo.title}</span>
      <button
        className=" removeButton btn btn-secondary"
        onClick={() => dispatch(removeTodo(todo._id))} // action
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
