import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/Exam/welcome`);
  return response.data;
};

export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${REMOTE_SERVER}/${todo.id}`);
  return response.data;
};

export const postTodo = async (todo: any) => {
  const response = await axios.post(`${REMOTE_SERVER}`, todo);
  return response.data;
};
