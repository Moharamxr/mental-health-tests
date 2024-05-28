import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const Tests = () => {
    const navigate = useNavigate();

    const handleTakeTestBtn = (test) => {
      navigate(`/tests/${test}`);
    };
  return (
    <section className="max-w-7xl mx-auto p-14" id="tests">
      <h2 className="font-bold text-3xl lg:text-5xl text-blue-800 leading-relaxed mb-10">
        Take a Mental Health Test
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {["ADHD", "Anxiety", "Depression"].map((item) => (
          <div
            key={item}
            className="bg-blue-100/70 rounded-3xl p-8 flex items-center gap-5 justify-between flex-col space-y-5 cursor-pointer hover:bg-blue-200/70 transition-colors ease-in"
          >
            <span className="text-3xl font-bold text-blue-800">
              {item} Test
            </span>
            <p className="text-blue-800 text-center">
              This test will help you understand more about {item}. Answer the
              questions honestly for accurate results.
            </p>
            <span onClick={() => handleTakeTestBtn(item)}>
              <PrimaryBtn text="TAKE TEST" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tests;
