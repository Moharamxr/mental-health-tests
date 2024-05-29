import axios from "axios";
const path = import.meta.env.VITE_BACKEND_URL;

export const login = async (email, password) => {
  const response = await axios.post(
    `${path}/auth/login`,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log("Login successful");
  localStorage.setItem("token", response?.data?.token);
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("userId", response?.data.user?._id);
  localStorage.setItem("name", `${response?.data.user?.name?.first} ${response?.data.user?.name?.last}`);
  console.log(response?.data);
  return response.data;
};

export const signUp = async (newData) => {
  const response = await axios.post(`${path}/auth/register`, newData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  localStorage.setItem("token", response?.data?.token);
  localStorage.setItem("isLoggedIn", true);
  console.log("Sign up successful");
  console.log(response?.data);
  return response.data;
};

export const logout = async() => {
 
    const response = await axios.post(`${path}/auth/logout`,{}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log("Logout successful");
    console.log(response?.data);

  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userId");
  localStorage.removeItem("name");
  console.log("Logged out");
};

export const sendEmail = async (newData) => {
  const response = await axios.post(`${path}/contact`, newData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log("Email sent successfully");
  return response.data;
}