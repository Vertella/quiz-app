import React from "react";
import Quiz from "@/components/Quiz/Quiz";
import QuizProgress from "@/components/Quiz/QuizProgress";

const QuizPage = () => {

  return (
    <div className="flex w-full h-full flex-col content-center bg-slate-950">
      <div className="w-4/5 flex flex-col content-center self-center"> 
        <div className="flex flex-col w-full sm:ml-5">
          <h4 className="mt-10 text-sm sm:text-base text-violet-800"><QuizProgress /></h4>
          <div className="h-full w-10/12 mt-4 text-base sm:text-xl xl:text-xl overflow:hidden sm:self-center text-center text-slate-200">
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;