import axios from "axios";

const API_BASE_URL = "https://swapi.dev/api";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

// export const fetchData = async () => {

//   try {
//     const response = await apiService.get("/starships");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const fetchData = async (endpoint) => {
  try {
    const response = await apiService.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
