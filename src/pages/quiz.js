import React from "react";
import questions from "../data/questions.json";
import { ButtonPre, ButtonNext } from "@/components/quizzez/Buttons";
import Question from "@/components/quizzez/Question";

const QuizPage = () => {
  // Your page-specific logic (styling, additional features, etc.)

  return (
    <div className="flex vw-full h-screen flex-col bg-blue-900">
      <div className="w-10/12 flex-col"> 
        <div className="flex flex-col items-start w-10/12 ml-5">
          <h4 className="mt-10 text-xl text-white/60">Question 1 of 5</h4>
          <div className="mt-4 text-2xl text-white">
            <Question />
          </div>
        </div>
        
        <div className="flex flex-col w-1/2">
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

        <div className="flex justify-between w-10/12 mt-4 text-white">
          <ButtonPre />
          <ButtonNext />
        </div>
      </div> 
    </div>
  );
};

export default QuizPage;
