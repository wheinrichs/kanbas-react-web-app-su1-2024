import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const updateQuiz = async ( qid: any, quiz: any) => {
    const response = await axios.put(
        `${REMOTE_SERVER}/api/quizzes/${qid}`,
        quiz
      );
      return response.data;
}

export const fetchQuiz = async (qid: any) => {
    const response = await axios.get(`${REMOTE_SERVER}/api/quizzes/byQID/${qid}`)
    return response.data;
}