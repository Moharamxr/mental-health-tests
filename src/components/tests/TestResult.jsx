import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { predict } from "../../services/tests.service";
import { CircularProgress } from "@mui/material";

const TestResult = () => {
  const [activeTab, setActiveTab] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { score, testType, answeredQuestions } = location.state || {};

  if (!score || !testType || !answeredQuestions) {
    return <Navigate to="/tests" replace />;
  }

  const scoreArray = [
    "Normal",
    "Mild",
    "Moderate",
    "Moderately Severe",
    "Severe",
    "Very Severe",
  ];

  const testTypeArray = ["Depression", "Anxiety", "ADHD"];

  const decideScore = (score) => {
    if (score >= 0 && score <= 4) {
      return scoreArray[0];
    } else if (score >= 5 && score <= 9) {
      return scoreArray[1];
    } else if (score >= 10 && score <= 14) {
      return scoreArray[2];
    } else if (score >= 15 && score <= 19) {
      return scoreArray[3];
    } else if (score >= 20 && score <= 27) {
      return scoreArray[4];
    } else if (score >= 28 && score <= 63) {
      return scoreArray[5];
    }
  };

  const result = decideScore(score);

  const aboutScore = (score) => {
    if (score >= 0 && score <= 4) {
      return `Your score of ${score} indicates that you have normal ${testType}. This means that you are not experiencing any symptoms of ${testType}. It is important to continue to monitor your mental health and seek help if you begin to experience symptoms of ${testType}. Remember, you are not alone, and help is available.`;
    } else if (score >= 5 && score <= 9) {
      return `Your score of ${score} indicates that you have mild ${testType}. This means that you may be experiencing some symptoms of ${testType} that are not significantly impacting your daily life. It is important to continue to monitor your symptoms and seek help if they worsen. Remember, you are not alone, and help is available.`;
    } else if (score >= 10 && score <= 14) {
      return `Your score of ${score} indicates that you have moderate ${testType}. This means that you may be experiencing some symptoms of ${testType} that are impacting your daily life. It is important to seek help from a mental health professional to discuss your symptoms and develop a treatment plan that works for you. Remember, you are not alone, and help is available.`;
    } else if (score >= 15 && score <= 19) {
      return `Your score of ${score} indicates that you have moderately severe ${testType}. This means that you may be experiencing symptoms of ${testType} that are significantly impacting your daily life. It is important to seek help from a mental health professional to discuss your symptoms and develop a treatment plan that works for you. Remember, you are not alone, and help is available.`;
    } else if (score >= 20 && score <= 27) {
      return `Your score of ${score} indicates that you have severe ${testType}. This means that you are experiencing severe symptoms of ${testType} that are significantly impacting your daily life. It is important to seek help from a mental health professional immediately to discuss your symptoms and develop a treatment plan that works for you. Remember, you are not alone, and help is available.`;
    } else if (score >= 28 && score <= 63) {
      return `Your score of ${score} indicates that you have very severe ${testType}. This means that you are experiencing very severe symptoms of ${testType} that are significantly impacting your daily life. It is important to seek help from a mental health professional immediately to discuss your symptoms and develop a treatment plan that works for you. Remember, you are not alone, and help is available.`;
    }
  };

  const resultAboutScore = aboutScore(score);

  const [text, setText] = useState("");
  const [isPredicting, setIsPredicting] = useState(false);

  const predictYourCondition = async () => {
    if (!text) {
      alert(
        "Please write what you feel before predicting your mental health condition."
      );
      return;
    }
    setIsPredicting(true);
    try {
      const prediction = await predict(text);
      setPredictionResult(prediction?.result);
      if (prediction?.result?.error){
        setPredictionResult(null);
      }
    } catch (error) {

    } finally {
      setIsPredicting(false);
    }
  };

  return (
    <div className="container w-full md:w-4/5 lg:w-3/5 p-4 sm:p-7 space-y-10 min-h-[70vh]">
      <div className="bg-blue-500 p-6 sm:p-8 rounded-2xl rounded-es-none">
        <p className="text-white text-lg">
          Your Results — {testType} Test : {score}
        </p>
        <h3 className="text-white text-2xl sm:text-4xl font-bold leading-tight">
          {result} {testType}
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
          ABOUT YOUR SCORE: {score}
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
          onClick={() => setActiveTab("predict")}
          className={`text-center py-3 rounded-2xl font-semibold text-lg transition-colors ease-in cursor-pointer ${
            activeTab === "predict"
              ? "bg-blue-800 text-white"
              : "bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white"
          }`}
        >
          PREDICT YOUR MENTAL HEALTH CONDITION
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
            {Object.keys(answeredQuestions || {}).map((questionIndex) => (
              <div
                key={questionIndex}
                className="bg-white p-4 sm:p-6 rounded-3xl shadow-md"
              >
                <p className="text-blue-800 font-semibold">
                  Question {parseInt(questionIndex) + 1}:
                </p>
                <p className="text-gray-700">
                  {answeredQuestions[questionIndex].question}
                </p>
                <p className="text-blue-800 font-semibold">Your Answer:</p>
                <p className="text-gray-700">
                  {answeredQuestions[questionIndex].option}
                </p>
                <p className="text-blue-800 font-semibold">
                  points : {answeredQuestions[questionIndex].score}
                </p>
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
            <p className="text-blue-800 font-semibold">{resultAboutScore}</p>
          </div>
        </div>
      )}
      {activeTab === "predict" && (
        <div className="container transition-all ease-in-out bg-blue-50 rounded-3xl rounded-tl-none border-[1px] border-blue-400 p-6 sm:p-10">
          <div className="space-y-5">
            <h3 className="text-2xl sm:text-3xl text-blue-800 font-semibold font-sans leading-tight lg:leading-[1.15] mb-5">
              Write what you feel
            </h3>
            <textarea
              className="bg-white border-2 rounded-2xl w-full p-3 h-36 outline-none "
              placeholder="type here"
              onChange={(e) => setText(e.target.value)}
            />
            <span onClick={predictYourCondition}>
              <PrimaryBtn
                text={
                  isPredicting ? (
                    <CircularProgress size={16} color="inherit" />
                  ) : (
                    "Predict"
                  )
                }
              />
            </span>
          </div>
          {predictionResult && (
            <div className="mt-6">
              <h3 className="text-2xl sm:text-3xl text-blue-800 font-semibold font-sans leading-tight lg:leading-[1.15] mb-5">
                Prediction Result
              </h3>
              <div className="bg-white p-6 rounded-3xl shadow-md">
                {predictionResult?.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-blue-800 font-semibold">
                      {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                    </span>
                    <span className="text-gray-700">
                      {item.score.toFixed(2) * 100}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TestResult;
