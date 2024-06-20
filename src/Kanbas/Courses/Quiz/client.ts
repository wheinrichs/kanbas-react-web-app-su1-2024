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

export const fetchQuiz = async (qid: any) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/quizzes/byQID/${qid}`);
  return response.data;
};

export const writeQuizGrade = async (grade: any) => {
  const response = await axios.post(
    `${REMOTE_SERVER}/api/quizgrades`,
    grade
  );
  return response.data;
}

export const getQuizGradeByUserID = async (userID: any) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/quizgrades/byuser/${userID}`);
  return response.data;
}

export const getQuizGradeByQuizID = async (quizID: any) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/quizgrades/byquiz/${quizID}`);
  return response.data;
}

export const getAllQuizGrades = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/api/quizgrades`);
  return response.data;
}

export const editQuizGrade = async (newGrade: any, gradeID: any) => {
  const response = await axios.put(`${REMOTE_SERVER}/api/quizgrades/${gradeID}`, newGrade);
  return response.data;
}