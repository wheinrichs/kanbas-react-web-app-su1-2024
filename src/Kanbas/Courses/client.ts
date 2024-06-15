import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
  const data = await axios.get(COURSES_API);
  return data.data;
};

export const createCourse = async (course: any) => {
    const response = await axios.post(COURSES_API, course);
    return response.data;
  };
  
  export const deleteCourse = async (id: any) => {
    const response = await axios.delete(`${COURSES_API}/${id}`);
    console.log("Response: ", response.data);
    return response.data;
  };
  
  export const updateCourse = async (course: any) => {
    //console.log("Course info: ", course.id);
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
  };
  