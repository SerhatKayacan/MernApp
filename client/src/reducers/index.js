// UI değiştirme işlemleri burada

const initialState = {
  todos: [],
  loading: false,
  newTodo: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload, // databaseten dönen dizi
        loading: false
      };
    //
    case "FORM_SUBMITTED":
      let newTodos = [...state.todos, action.payload]; // post edileni ekle, yeni dizi oluştur
      return Object.assign({}, state, {
        // yeni obje oluştur, state'i kopyala, todos'un ve newTodo'nun değerlerini değiştir
        todos: newTodos,
        newTodo: ""
      });
    //
    case "TOGGLE":
      let newtodos = [...state.todos];
      const findTodo = todo => {
        return todo._id === action.payload;
      };
      newtodos.find(findTodo).done = action.done;
      return Object.assign({}, state, {
        todos: newtodos
      });
    //
    case "REMOVE_TODO":
      let todoss = state.todos.filter(todo => todo._id !== action.payload); //id'si farklı olanları filtrele
      return Object.assign({}, state, {
        todos: todoss
      });
    //
    case "NEW_TODO_CHANGED":
      let newtodo = action.newtodo;
      return { ...state, newTodo: newtodo };
    //
    case "ITEMS_LOADING":
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default reducer;
