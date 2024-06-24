import axios from "axios";
const axiosWithCredentials = axios.create({
   withCredentials: true,
   });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};
const handleError = (error:any) => {
  if (error.response) {
    console.error("API call error response:", error.response); // Log error response
    throw error.response.data;
  } else {
    console.error("Network error:", error); // Log network error
    throw new Error("Network Error");
  }
};
// Sign up new user
export const signup = async (user:any ) => {
  console.log("Before sending API request:", user); // Log before sending API request
  try {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    console.log("API response:", response.data); // Log the API response
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

// Update user profile
export const updateProfile = async (user:any) => {
  try {
    console.log("Client updateUser - before API call:", user); // Log user data before API call
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    console.log("Update profile API response:", response.data); // Log the API response
    return response.data;
  } catch (error) {
    handleError(error);
  }
};


