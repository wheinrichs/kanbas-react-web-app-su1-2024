import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Assignment } from "./types";
import { assignments } from "../../Database";

interface AssignmentsState {
  assignments: Assignment[];
  assignment: Assignment | null;
}

const initialState: AssignmentsState = {
  assignments: assignments,
  assignment: null,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
      setAssignments: (state, action) => {
        state.assignments = action.payload;
      },
      addAssignment: (state, action) => {
          state.assignments = [
              { ...action.payload, _id: new Date().getTime().toString() },
              ...state.assignments,
          ];
      },
      deleteAssignment: (state, action) => {
          state.assignments = state.assignments.filter(
              (assignment) => assignment._id !== action.payload
          );
      },
      updateAssignment: (state, action) => {
          state.assignments = state.assignments.map((assignment) => {
              if (assignment._id === action.payload._id) {
                  return action.payload;
              } else {
                  return assignment;
              }
          });
      },
      setAssignment: (state, action) => {
          state.assignments = action.payload;
      },
      cancelAssignmentUpdate: (state, action) => {
          state.assignments = initialState.assignments;
      },
  },
});


export const { addAssignment, deleteAssignment,setAssignments,updateAssignment, setAssignment, cancelAssignmentUpdate } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;