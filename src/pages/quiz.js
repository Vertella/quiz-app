import React from "react";
import { ButtonPre, ButtonNext } from "@/components/quizzez/Buttons";
import Question from "@/components/quizzez/Question";
import { AnswerOptions } from "@/components/quizzez/AnswerOptions";

const QuizPage = () => {
  // Your page-specific logic (styling, additional features, etc.)

  return (
    <div className="flex vw-full h-screen flex-col bg-blue-900">
      <div className="lg:w-10/12 flex-col"> 
        <div className="flex flex-col items-start md:w-10/12 ml-5">
          <h4 className="mt-10 text-xl text-white/60">Question 1 of 5</h4>
          <div className="mt-4 text-2xl text-white">
            <Question />
          </div>
        </div>
        
        <div className="flex flex-col justify-center lg:w-1/2">
          <AnswerOptions />
        </div>

        <div className="flex w-full justify-between md:w-10/12 mt-4 text-white">
          <ButtonPre />
          <ButtonNext />
        </div>
      </div> 
    </div>
  );
};

export default QuizPage;
