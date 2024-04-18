import axios from "axios";

const SHIPS_API_BASE_URL = "https://swapi.dev/api";

const apiShipsService = axios.create({
  baseURL: SHIPS_API_BASE_URL,
});

export const fetchFunction = async (url) => {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log("Fetch error: " + error);
  }
};

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
    const response = await apiShipsService.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// intent reqres fallit
// const AUTH_API_BASE_URL = "https://reqres.in/api";
// const apiAuthService = axios.create({
//   baseURL: AUTH_API_BASE_URL,
// });
// export const fetchData2 = async (endpoint) => {
//   try {
//     const response = await apiAuthService.get(endpoint);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
