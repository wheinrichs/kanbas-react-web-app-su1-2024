import axios from "axios";

const axiosWithCredentials = axios.create({ 
  withCredentials: true, 
});
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
  try {
    const response = await axiosWithCredentials.get(COURSES_API);
    return response.data;
  } catch (error) {
    console.error('Error fetching all courses:', error);
    throw error;
  }
};
export const fetchPublishedCourses = async () => {
  try {
    const response = await axiosWithCredentials.get(`${COURSES_API}/published`);
    return response.data;
  } catch (error) {
    console.error('Error fetching published courses:', error);
    throw error;
  }
};
export const createCourse = async (course: any) => {
    const response = await axiosWithCredentials.post(COURSES_API, course);
    return response.data;
};
export const deleteCourse = async (id: string) => {
  const response = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return response.data;
};
export const updateCourse = async (course: any) => {
  const response = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};


  
