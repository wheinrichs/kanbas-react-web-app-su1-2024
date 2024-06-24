import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduceExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduceExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/ReduceExamples/AddRedux/addReducer";
import todosReducer from "../Lab4/ReduceExamples/todos/todosReducer";
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;