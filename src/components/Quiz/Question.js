import React from "react";
import questions from "../../data/questions.json";
import { useQuestionContext } from "../../context/useQuestionContext";
import { AnswerOptions } from "./AnswerOptions";

const Question = () => {
  const { currentQuestion } = useQuestionContext();
  const currentQuestionObj = questions[currentQuestion] || {};
  return (
    <div>
      {currentQuestionObj.question ? (
        <div>
          <h2 className="text-lg font-bold">{currentQuestionObj.question}</h2>
          <AnswerOptions />
        </div>
      ) : (
        <p>Loading question...</p>
      )}
    </div>
  );
};

export default Question;
