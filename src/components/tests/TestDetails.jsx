import React, { useState } from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { useNavigate, useParams } from "react-router-dom";

const TestDetails = () => {
  const {id } = useParams();
  const navigate = useNavigate();

  const test = {
    title: `${id.toUpperCase()} TEST`,
    description: "This test will help you understand if you have symptoms of ADHD. Please answer the questions honestly.",
    questions: [
      "Do you find it difficult to concentrate on tasks?",
      "Do you frequently make careless mistakes in your work?",
      "Do you often feel restless or fidgety?",
      "Do you have trouble organizing tasks and activities?",
      "Do you often avoid tasks that require sustained mental effort?"
    ]
  };

  const answerOptions = [
    "NOT AT ALL",
    "SEVERAL DAYS",
    "MORE THAN HALF THE DAYS",
    "NEARLY EVERY DAY"
  ];


  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedAnswers); // Handle form submission logic here
    navigate("/result")
  };

  return (
    <div className="space-y-10 p-4 lg:p-8">
      {/* Header Section */}
      <header className="bg-blue-100/70 rounded-3xl p-10 lg:p-14">
        <h1 className="text-4xl lg:text-7xl text-blue-800 font-semibold leading-tight lg:leading-[1.15] mb-5">
          {test.title}
        </h1>
        <p className="text-gray-500 text-xl mb-5">{test.description}</p>
      </header>

      {/* Questions Section */}
      <section className="bg-white p-8 rounded-3xl shadow-md">
        <h2 className="text-3xl text-blue-800 font-bold mb-5">Questions</h2>
        <form className="space-y-10" onSubmit={handleSubmit}>
          {test.questions.map((question, index) => (
            <div key={index} className="space-y-5">
              <p className="text-gray-700">{question}</p>
              <div className="flex flex-wrap gap-4">
                {answerOptions.map((option, i) => (
                  <label
                    key={i}
                    className={`flex items-center space-x-2 p-4 rounded-3xl shadow-md cursor-pointer transition-colors ease-in-out ${
                      selectedAnswers[index] === option
                        ? "bg-blue-200"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => handleOptionChange(index, option)}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={selectedAnswers[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                      className="hidden"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <PrimaryBtn text="SUBMIT TEST" />
        </form>
      </section>

      {/* Additional Information Section */}
      <section className="bg-red-50 p-8 rounded-3xl">
        <h2 className="text-3xl text-red-800 font-bold mb-5">Additional Information</h2>
        <p className="text-gray-500">
          If you feel you need further assistance or a professional diagnosis, please contact a mental health professional. This test is for informational purposes only and is not a substitute for professional evaluation.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 p-8 rounded-3xl">
        <h2 className="text-3xl text-blue-800 font-bold mb-5">
          What People Are Saying
        </h2>
        <div className="space-y-5">
          {["John Doe", "Jane Smith", "Alex Johnson"].map((name, index) => (
            <blockquote
              key={index}
              className="bg-white p-5 rounded-xl shadow-md"
            >
              <p className="text-gray-700 italic">
                "Taking this test helped me understand my symptoms better and seek the help I needed."
              </p>
              <cite className="text-blue-800 font-bold mt-3 block">
                - {name}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestDetails;
