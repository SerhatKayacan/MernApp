import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { newTodoChanged, formSubmitted } from "../actions/index";

const NewTodoForm = props => {
  const dispatch = useDispatch();
  const newTodo = useSelector(state => state.newTodo); //newTodo stateini al

  const formSubmittedd = e => {
    e.preventDefault(); // sayfayı yenileme
    dispatch(formSubmitted(newTodo)); //action'ı çalıştır
  };
  return (
    <form onSubmit={formSubmittedd}>
      <div className="form-group">
        <input
          className="form-control"
          onChange={e => dispatch(newTodoChanged(e.target.value))} //action'ı çalıştır, input değerini gönder
          id="newTodo"
          name="newTodo"
          value={newTodo}
        />
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default NewTodoForm;
