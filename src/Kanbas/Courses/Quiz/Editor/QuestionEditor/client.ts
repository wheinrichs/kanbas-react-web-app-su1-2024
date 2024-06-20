import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const fetchQuizQuestions = async (qid: any) => {
    const response = await axios.get(`${REMOTE_SERVER}/api/quizzes/${qid}/questions`)
    return response.data;
}

export const addNeWQuizQuestion = async (qid: any, question: any) => {
    const response = await axios.post(
        `${REMOTE_SERVER}/api/quizzes/${qid}/questions`,
        question
      );
      return response.data;
}

export const updateQuizQuestion = async (qid: any, question: any) => {
    const response = await axios.put(`${REMOTE_SERVER}/api/quizzes/${qid}/questions/${question._id}`, question);
    return response.data;
}

export const deleteQuizQuestionsByQuestionID = async ( questionID: any) => {
    const response = await axios.delete(`${REMOTE_SERVER}/api/questions/${questionID}`);
    return response.data;
  }