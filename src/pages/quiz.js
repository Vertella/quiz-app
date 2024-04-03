import React from "react";
import Quiz from "@/components/quizzez/Quiz";

const QuizPage = () => {
  // Your page-specific logic (styling, additional features, etc.)

  return (
    <div className="flex w-full h-screen flex-col content-center bg-slate-950">
      <div className="w-4/5 flex flex-col content-center self-center"> 
        <div className="flex flex-col w-full sm:ml-5">
          <h4 className="mt-10 text-sm sm:text-base text-violet-800">Question 1 of 9</h4>
          <div className="h-20 mt-4 text-base sm:text-xl xl:text-3xl lg:max-w-fit overflow:hidden sm:self-center text-center text-slate-200">
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;