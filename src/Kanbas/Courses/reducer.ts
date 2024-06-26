import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentCourses: [{author: ""}],
};

const CurrentCoursesSlice = createSlice({
    name: "CurrentCourses",
    initialState,
    reducers: {
      setCurrentCourses: (state, { payload: course }) => {
        state.currentCourses = course;
      }
    },
});

export const { setCurrentCourses } =
  CurrentCoursesSlice.actions;

export default CurrentCoursesSlice.reducer;