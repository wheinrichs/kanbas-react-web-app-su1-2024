import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.find(
        (a) => a._id === assignment._id
      )
        ? (state.assignments = state.assignments.map((a) =>
            a._id === assignment._id ? assignment : a
          ))
        : [
            ...state.assignments,
            { ...assignment, id: new Date().getTime().toString() },
          ];
    },

    deleteAssignment: (state, { payload: assignment_id }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignment_id
      );
    },
  },
});

export const { addAssignment, deleteAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
