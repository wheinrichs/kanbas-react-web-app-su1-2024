import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, { payload: assignments }) => {
      state.assignments = assignments;
    },

    addAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.find(
        (a: any) => a._id === assignment._id
      )
        ? (state.assignments = state.assignments.map((a: any) =>
            a._id === assignment._id ? assignment : a
          ) as any)
        : [
            ...state.assignments,
            { ...assignment},
          ] as any;
        },

    deleteAssignment: (state, { payload: assignment_id }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignment_id
      );
    },
  },
});

export const { addAssignment, deleteAssignment, setAssignments } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
