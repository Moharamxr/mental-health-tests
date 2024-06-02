import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.service";
import { CircularProgress } from "@mui/material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      if (error?.response?.status === 404) {
        setErrorMessage("Invalid email");
      } else if (error?.response?.status === 401) {
        setErrorMessage("Invalid password");
      } else if (error?.response?.status === 500) {
        setErrorMessage("An error occurred");
      } else {
        setErrorMessage(error?.response?.data?.error || "An error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-800">Login</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mt-4 font-semibold">
            {errorMessage}
          </p>
        )}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <TextField
              fullWidth
              variant="outlined"
              id="email"
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <TextField
              fullWidth
              variant="outlined"
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="text-sm">
              <span
                onClick={() => {
                  navigate("/sign-up");
                }}
                className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer hover:underline"
              >
                Don't have an account? Sign up
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLoading ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
