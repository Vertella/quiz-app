// components/Quiz.js
import React from "react";
import Question from "./Question";
import ResultsScreen from "./ResultsScreen";
import { useQuestionContext } from "@/context/useQuestionContext";
import { ButtonComplete, ButtonNext, ButtonPre } from "./Buttons";

function Quiz() {
  const {
    currentQuestion,
    answerOptions,
    questions,
    handlePrevious,
    handleNext,
    handleComplete,
    isQuizComplete,
  } = useQuestionContext();

  const handleResults = () => {
    handleComplete();
  };

  return (
    <div className="flex w-full items-center justify-center">
      {isQuizComplete ? (
        <ResultsScreen />
      ) : (
        <div className="flex flex-col items-center justify-center w-full max-w-md">
          <Question
            currentQuestion={currentQuestion}
            answerOptions={answerOptions}
            className=""
          />
          <div className="flex w-full justify-evenly md:w-10/12 mt-4 text-white">
            <ButtonPre handlePrevious={handlePrevious} />
            {currentQuestion === questions.length - 1 ? (
              <ButtonComplete handleResults={handleResults} />
             ) : ( <ButtonNext handleNext={handleNext} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
