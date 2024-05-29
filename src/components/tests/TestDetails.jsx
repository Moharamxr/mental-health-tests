import React, { useState } from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { useNavigate, useParams } from "react-router-dom";
import { takeTest } from "../../services/tests.service";
import { CircularProgress } from "@mui/material";

const TestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const test = {
    title: `${id.toUpperCase()} TEST`,
    description: `This test will help you understand if you have symptoms of ${id}. Please answer the questions honestly.`,
    questions: {
      depression: [
        "Little interest or pleasure in doing things",
        "Feeling down, depressed, or hopeless",
        "Trouble falling or staying asleep, or sleeping too much",
        "Feeling tired or having little energy",
        "Poor appetite or overeating",
        "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
        "Trouble concentrating on things, such as reading the newspaper or watching television",
        "Moving or speaking so slowly that other people could have noticed or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
        "Thoughts that you would be better off dead, or of hurting yourself",
        "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?",
      ],
      anxiety: [
        "Feeling nervous, anxious, or on edge",
        "Not being able to stop or control worrying",
        "Worrying too much about different things",
        "Trouble relaxing",
        "Being so restless that it is hard to sit still",
        "Becoming easily annoyed or irritable",
        "Feeling afraid, as if something awful might happen",
      ],
      adhd: [
        "Do you often forget to do daily activities?",
        "Do you often lose things like keys, phone, etc.?",
        "Do you often feel restless or fidgety?",
        "Do you have trouble organizing tasks and activities?",
        "Do you often avoid tasks that require sustained mental effort?",
        "Do you often have difficulty sustaining attention in tasks or play activities?",
        "Do you often have difficulty following through on instructions or finishing tasks?",
        "Do you often have difficulty waiting your turn?",
        "Do you often interrupt or intrude on others?",
      ],
    },
  };

  const options = [
    { text: "NOT AT ALL", score: 0 },
    { text: "SEVERAL DAYS", score: 1 },
    { text: "MORE THAN HALF THE DAYS", score: 2 },
    { text: "NEARLY EVERY DAY", score: 3 },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: {
        text: option.text,
        score: option.score,
      },
    }));
  };

  const isValidationFailed = () => {
    if (
      Object.keys(selectedAnswers).length <
      test.questions[id.toLowerCase()].length
    ) {
      alert("Please answer all the questions before submitting the test.");
      return true;
    }
    return false;
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFailed = isValidationFailed();
    if (isFailed) return;
    setIsLoading(true);
    const totalScore = Object.values(selectedAnswers).reduce(
      (acc, answer) => acc + answer.score,
      0
    );
  
    const answeredQuestions = [];
  
    test.questions[id.toLowerCase()].forEach((question, index) => {
      if (selectedAnswers[index]) {
        answeredQuestions.push({
          question: question,
          option: selectedAnswers[index].text,
          score: selectedAnswers[index].score,
        });
      }
    });
  
    try {
      if (isLoggedIn) {
        await takeTest({ category: id, score: totalScore });
      }
      navigate("/result", {
        state: {
          score: totalScore,
          testType: id,
          selectedAnswers,
          answeredQuestions,
        },
      });
    } catch (error) {
      
      console.error("Failed to submit test", error);
    } finally {
      setIsLoading(false);
      navigate("/result", {
        state: {
          score: totalScore,
          testType: id,
          selectedAnswers,
          answeredQuestions,
        },
      });
    }
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
          {test?.questions[id.toLowerCase()]?.map((question, index) => (
            <div key={index} className="space-y-5">
              <p className="text-gray-700 text-lg font-medium">
                {index + 1 + ". " + question}
              </p>
              <div className="flex flex-wrap gap-4">
                {options.map((option, i) => (
                  <label
                    key={i}
                    className={`flex items-center space-x-2 p-4 rounded-3xl shadow-md cursor-pointer transition-colors ease-in-out ${
                      selectedAnswers[index]?.text === option.text
                        ? "bg-blue-200"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option.text}
                      checked={selectedAnswers[index]?.text === option.text}
                      onChange={() => handleOptionChange(index, option)}
                      className="hidden"
                    />
                    <span className="text-gray-700">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <PrimaryBtn
            text={
              isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "SUBMIT TEST"
              )
            }
          />
        </form>
      </section>

      {/* Additional Information Section */}
      <section className="bg-red-50 p-8 rounded-3xl">
        <h2 className="text-3xl text-red-800 font-bold mb-5">
          Additional Information
        </h2>
        <p className="text-gray-500">
          If you feel you need further assistance or a professional diagnosis,
          please contact a mental health professional. This test is for
          informational purposes only and is not a substitute for professional
          evaluation.
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
                "Taking this test helped me understand my symptoms better and
                seek the help I needed."
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
