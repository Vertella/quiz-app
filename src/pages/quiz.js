import React from "react";
import { ButtonPre, ButtonNext } from "@/components/quizzez/Buttons";
import Question from "@/components/quizzez/Question";
import { AnswerOptions } from "@/components/quizzez/AnswerOptions";

const QuizPage = () => {
  // Your page-specific logic (styling, additional features, etc.)

  return (
    <div className="flex w-full h-screen flex-col content-center bg-blue-900">
      <div className="md:w-70% lg:w-80% flex flex-col content-center self-center"> 
        <div className="flex flex-col max-w-6xl ml-5">
          <h4 className="mt-10 text-xl text-white/60">Question 1 of 5</h4>
          <div className="h-20 mt-4 text-2xl sm:text-3xl xl:text-4xl lg:max-w-fit overflow:hidden md:self-center text-white">
            <Question />
          </div>
        </div>
        
        <div className="flex flex-col self-center lg:w-2/3 min-w-72">
          <AnswerOptions />
        </div>

        <div className="flex w-full justify-evenly justify-items-end self-center md:w-10/12 mt-4 text-white">
          <ButtonPre />
          <ButtonNext />
        </div>
      </div> 
    </div>
  );
};

export default QuizPage;
