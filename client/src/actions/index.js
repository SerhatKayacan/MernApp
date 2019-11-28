import axios from "axios";

// database işlemleri burada

export const getTodos = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/todos") // proxy sayesinde http.. yazmaya gerek yok, GET REQUEST
    .then(res =>
      dispatch({
        type: "GET_TODOS",
        payload: res.data // todos dizisi
      })
    );
};
export const formSubmitted = newTodo => dispatch => {
  axios.post("/api/todos", { title: newTodo }).then((
    res // POST request (yükle)
  ) =>
    dispatch({
      type: "FORM_SUBMITTED",
      payload: res.data // eklenen newTodo
    })
  );
};
export const removeTodo = _id => dispatch => {
  axios.delete(`api/todos/${_id}`).then((
    res // DELETE request(delete by _id)
  ) =>
    dispatch({
      type: "REMOVE_TODO",
      payload: _id
    })
  );
};
export const toggleTodoDone = (done, _id) => dispatch => {
  axios.put(`api/todos/${_id}`, { done: done }).then((
    res // UPDATE (sadece done'ı değiştir o id'li elemanın)
  ) =>
    dispatch({
      type: "TOGGLE",
      payload: _id,
      done // done:done (key:value)
    })
  );
};
export const newTodoChanged = newtodo => {
  const action = {
    type: "NEW_TODO_CHANGED",
    newtodo // newtodo:newtodo
  };
  return action;
};
export const setItemsLoading = () => {
  return {
    type: "ITEMS_LOADING"
  };
};
