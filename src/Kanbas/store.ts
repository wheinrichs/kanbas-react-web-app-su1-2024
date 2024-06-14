import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import quizReducer from "./Courses/Quiz/reducer";
const store = configureStore({
  reducer: {
    modulesReducer, assignmentsReducer, quizReducer
  },
});
export default store;