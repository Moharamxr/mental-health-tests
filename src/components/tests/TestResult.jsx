import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TestResult = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container w-full md:w-4/5 lg:w-3/5 p-4 sm:p-7 space-y-10 min-h-[70vh]">
      <div className="bg-blue-500 p-6 sm:p-8 rounded-2xl rounded-es-none">
        <p className="text-white text-lg">Your Results — Depression Test:</p>
        <h3 className="text-white text-2xl sm:text-4xl font-bold leading-tight">
          Moderately Severe Depression
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 p-3 gap-3 sm:gap-5">
        <span
          onClick={() => setActiveTab("score")}
          className={`text-center py-3 rounded-2xl font-semibold text-lg transition-colors ease-in cursor-pointer ${
            activeTab === "score"
              ? "bg-blue-800 text-white"
              : "bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white"
          }`}
        >
          ABOUT YOUR SCORE: 17 / 27
        </span>
        <span
          onClick={() => setActiveTab("answers")}
          className={`text-center py-3 rounded-2xl font-semibold text-lg transition-colors ease-in cursor-pointer ${
            activeTab === "answers"
              ? "bg-blue-800 text-white"
              : "bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white"
          }`}
        >
          YOUR ANSWERS
        </span>
        <span
          onClick={() => {
            setActiveTab("anotherTest");
            navigate("/tests");
          }}
          className={`text-center py-3 rounded-2xl font-semibold text-lg transition-colors ease-in cursor-pointer ${
            activeTab === "anotherTest"
              ? "bg-blue-800 text-white"
              : "bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white"
          }`}
        >
          TAKE ANOTHER MENTAL HEALTH TEST
        </span>
      </div>
      {activeTab === "answers" && (
        <div className="container transition-all ease-in-out bg-blue-50 rounded-3xl rounded-tl-none border-[1px] border-blue-400 p-6 sm:p-10">
          <h3 className="text-2xl sm:text-3xl text-blue-800 font-semibold font-sans leading-tight lg:leading-[1.15] mb-5">
            Your Answers
          </h3>
          <div className="grid grid-cols-1 gap-5">
            {[
              "Little interest or pleasure in doing things",
              "Feeling down, depressed, or hopeless",
              "Trouble falling or staying asleep, or sleeping too much",
              "Feeling tired or having little energy",
              "Poor appetite or overeating",
              "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
              "Trouble concentrating on things, such as reading the newspaper or watching television",
              "Moving or speaking so slowly that other people could have noticed. Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
              "Thoughts that you would be better off dead or of hurting yourself in some way",
            ].map((question, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-blue-800 font-semibold">
                  {index + 1}. {question}
                </p>
                <p className="text-blue-800 font-semibold">3</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === "score" && (
        <div className="container transition-all ease-in-out bg-blue-50 rounded-3xl rounded-tl-none border-[1px] border-blue-400 p-6 sm:p-10">
          <div>
            <h3 className="text-2xl sm:text-3xl text-blue-800 font-semibold font-sans leading-tight lg:leading-[1.15] mb-5">
              About Your Score
            </h3>
            <p className="text-blue-800 font-semibold">
              Your score of 17 indicates that you have moderate depression. This
              means that you may be experiencing some symptoms of depression
              that are impacting your daily life. It is important to seek help
              from a mental health professional to discuss your symptoms and
              develop a treatment plan that works for you. Remember, you are not
              alone, and help is available.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestResult;
