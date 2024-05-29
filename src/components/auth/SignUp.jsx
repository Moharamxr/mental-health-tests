import React, { useState } from "react";
import { signUp } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [ssn, setSSN] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSSNChange = (e) => {
    setSSN(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !phone ||
      !gender ||
      !ssn
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const newData = {
      email,
      password,
      firstName,
      lastName,
      phone,
      gender,
      ssn,
    };

    try {
      await signUp(newData);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setGender("");
      setSSN("");
      navigate('/login')
    } catch (error) {
      console.error("Sign up failed", error);
      setErrorMessage(error?.response?.data?.error || error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Sign Up
        </h2>
        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-lg font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-lg font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mt-4"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700 mt-4"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700 mt-4"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-lg font-medium text-gray-700 mt-4"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                value={gender}
                onChange={handleGenderChange}
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="ssn"
                className="block text-lg font-medium text-gray-700 mt-4"
              >
                SSN (Social Security Number)
              </label>
              <input
                type="text"
                id="ssn"
                name="ssn"
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                placeholder="Enter your SSN"
                value={ssn}
                onChange={handleSSNChange}
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
             
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
