import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  quizzes: [],
  quiz_questions: [],
};

const QuizzesSlice = createSlice({
  name: "Quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, { payload: quizzes }) => {
      state.quizzes = quizzes;
    },

    setQuizQuestions: (state, { payload: quiz_questions }) => {
      state.quiz_questions = quiz_questions;
    },

    addQuiz: (state, { payload: quiz }) => {
      state.quizzes = [...state.quizzes, quiz] as any;
    },

    editQuizQuestion: (state, { payload: question_id }) => {
      state.quiz_questions = state.quiz_questions.map((q: any) => q._id === question_id ? {...q, editing: true} : q) as any;
    },

    cancelEditQuizQuestion: (state, { payload: question_id }) => {
      state.quiz_questions = state.quiz_questions.map((q: any) => q._id === question_id ? {...q, editing: false} : q) as any;
    },

    addNewQuestion: (state, { payload: question }) => {
      state.quiz_questions = [...state.quiz_questions, {...question} ] as any;

    },

    updateQuizQuestion: (state, {payload: question}) => {
      state.quiz_questions = state.quiz_questions.map((q: any) => q._id === question._id ? {...question} : q) as any;
    },
  },
});

export const { setQuizQuestions, setQuizzes, addQuiz, editQuizQuestion, cancelEditQuizQuestion, addNewQuestion, updateQuizQuestion } =
  QuizzesSlice.actions;

export default QuizzesSlice.reducer;
