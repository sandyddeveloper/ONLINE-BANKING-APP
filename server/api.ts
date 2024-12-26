import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/";

export const getUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}user/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return { first_name: "Guest" };
  }
};
