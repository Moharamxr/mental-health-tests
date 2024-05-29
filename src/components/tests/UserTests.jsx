import React, { useEffect, useState } from "react";
import { getTests } from "../../services/tests.service";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const UserTests = () => {
  const [tests, setTests] = useState([]);
  const [error, setError] = useState(null);

  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const fetchTests = async () => {
    try {
      const response = await getTests();
      setTests(response?.tests.reverse() || []);
    } catch (error) {
      console.error("Failed to fetch tests", error);
      setError("Failed to load tests. Please try again later.");
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  

  return (
    <div className="container w-full md:w-4/5 lg:w-3/5 p-4 sm:p-7 space-y-10 min-h-[70vh]">
      <h2 className="text-3xl font-bold text-blue-800 mb-5">Your Previous Tests</h2>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : tests.length > 0 ? (
        tests.map((test) => (
          <div
            key={test._id}
            className="bg-blue-50 rounded-3xl border-[1px] border-blue-400 p-6 sm:p-10 mb-5 shadow-md"
          >
            <h3 className="text-2xl sm:text-3xl text-blue-800 font-semibold font-sans leading-tight lg:leading-[1.15] mb-2">
              {test.category} Test
            </h3>
            <p className="text-gray-700 mb-1">
              <strong>Score:</strong> {test.score}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Date:</strong> {new Date(test.date).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-700">No previous tests found.</p>
      )}
    </div>
  );
};

UserTests.propTypes = {
  tests: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
};

export default UserTests;
