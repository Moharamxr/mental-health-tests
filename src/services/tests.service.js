import axios from "axios";
const path = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create();

const handleRequest = async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

axiosInstance.interceptors.request.use(handleRequest, (error) => {
  return Promise.reject(error);
});

const handleResponse = (response) => {
  console.log(response.data.message);
  console.log(response.data);
  return response.data;
};

const handleError = (error) => {
  if (error.response && error.response.status === 401) {
    console.error("Unauthorized");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    window.location.replace("/");
  } else {
    console.error("Error occurred:", error);
  }
  throw error;
};

export const takeTest = async (newData) => {
  console.log(newData);
  try {
    const response = await axiosInstance.post(`${path}/tests`, newData);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const getTests = async () => {
  try {
    const response = await axiosInstance.get(`${path}/tests`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const predict = async (newData) => {
  try {
    const response = await axiosInstance.post(
      `${path}/tests/predict`,
      {
        text: newData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Prediction successful");
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
