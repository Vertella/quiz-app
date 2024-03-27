import React from "react";
import questions from "../data/questions.json";
import { ButtonPre, ButtonNext } from "@/components/quizzez/Buttons";
import Question from "@/components/quizzez/Question";

const QuizPage = () => {
  // Your page-specific logic (styling, additional features, etc.)

  return (
    <div className="flex vw-full h-screen flex-col bg-blue-900">
      <div className="flex flex-col items-start w-full">
        <h4 className="mt-10 text-xl text-white/60">Question 1 of 5</h4>
        <div className="mt-4 text-2xl text-white">
          <Question />
        </div>
      </div>
      
      <div className="flex flex-col w-full">
        {questions[0].answerOptions.map((answer, index) => (
          <div
            key={index}
            className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
          >
            <input type="radio" className="w-6 h-6 bg-black" />
            <p className="ml-6 text-white">{answer.answer}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full mt-4 text-white">
        <ButtonPre />
        <ButtonNext />
      </div>

    </div>
  );
};

export default QuizPage;
