import React, { useState } from "react";

const TestResult = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="container w-3/5 p-7 gap-5 min-h-[70vh]">
      <div className="bg-blue-500 p-8 rounded-2xl rounded-es-none">
        <p className="text-white text-lg">Your Results — Depression Test:</p>
        <h3 className="text-white text-4xl font-bold leading-tight">
          Moderately Severe Depression
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 p-3 gap-5">
        <span 
          onClick={() => setActiveTab('score')} 
          className={`text-center py-3 rounded-2xl font-semibold text-lg transition-colors ease-in ${
            activeTab === 'score' ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white'
          }`}
        >
          ABOUT YOUR SCORE: 17 / 27
        </span>
        {/* <span 
          onClick={() => setActiveTab('answers')} 
          className={`text-center py-3 rounded-2xl font-semibold text-lg transition-colors ease-in ${
            activeTab === 'answers' ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white'
          }`}
        >
          YOUR ANSWERS
        </span> */}
        <span 
          onClick={() => setActiveTab('anotherTest')} 
          className={`text-center py-3 rounded-2xl font-semibold text-lg transition-colors ease-in ${
            activeTab === 'anotherTest' ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white'
          }`}
        >
          TAKE ANOTHER MENTAL HEALTH TEST
        </span>
      </div>
    </div>
  );
};

export default TestResult;
