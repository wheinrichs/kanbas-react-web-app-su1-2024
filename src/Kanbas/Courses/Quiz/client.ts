import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;


export const createQuiz = async ( quiz: any) => {
  const response = await axios.post(
    `${REMOTE_SERVER}/api/quizzes`,
    quiz
  );
  return response.data;
};

export const fetchQuizzesByCourse = async (courseID: any) => {
    const response = await axios.get(`${REMOTE_SERVER}/api/quizzes/${courseID}`)
    return response.data;
}
