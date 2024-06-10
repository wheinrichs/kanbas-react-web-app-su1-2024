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
        console.log(quiz_questions);

      state.quiz_questions = quiz_questions;
      console.log(state.quiz_questions);

    },

    addQuiz: (state, { payload: quiz }) => {
      state.quizzes = [...state.quizzes, quiz] as any;
    },

    addQuizQuestion: (state, { payload: question }) => {
      state.quiz_questions = [...state.quiz_questions, question] as any;
    },

    editQuizQuestion: (state, { payload: question_id }) => {
      state.quiz_questions = state.quiz_questions.map((q: any) => q.question_id === question_id ? {...q, editing: true} : q) as any;
    },

    cancelEditQuizQuestion: (state, { payload: question_id }) => {
      state.quiz_questions = state.quiz_questions.map((q: any) => q.question_id === question_id ? {...q, editing: false} : q) as any;
    },

    addNewQuestion: (state, { payload: question }) => {
      state.quiz_questions = [...state.quiz_questions, {...question} ] as any;
    },

    updateQuizQuestion: (state, {payload: question}) => {
      state.quiz_questions = state.quiz_questions.map((q: any) => q.question_id === question.question_id ? {...question, editing: false} : q) as any;
    },
  },
});

export const { setQuizQuestions, setQuizzes, addQuiz, addQuizQuestion, editQuizQuestion, cancelEditQuizQuestion, addNewQuestion, updateQuizQuestion } =
  QuizzesSlice.actions;

export default QuizzesSlice.reducer;
