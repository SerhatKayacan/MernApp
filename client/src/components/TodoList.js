import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { getTodos } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

const TodoList = props => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos); //state'den todos'u al
  useEffect(() => {
    dispatch(getTodos()); // sayfa yüklendiğinde getTodos action çalıştır
  }, [dispatch]);
  return (
    <ul className="list-group">
      {todos.map(todo => {
        return <TodoItem key={todo._id} todo={todo} />; // todo, todos dizisinin her bir elemanı
      })}
    </ul>
  );
};

export default TodoList;
