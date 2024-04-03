import React from "react";
import questions from "../../data/questions.json";
import { useQuestionContext } from "@/context/useQuestionContext";

export function AnswerOptions() {
  const { answerOptions } = useQuestionContext();

  return (

    answerOptions.map((answer, index) => (
      <div
        key={index}
        onClick={<p>FunctionHere</p>}
        className="flex items-center py-3 text-center m-2 ml-0 space-x-2 border-2 cursor-pointer bg-indigo-950 border-violet-950 hover:text-yellow-500 hover:bg-violet-900 hover:border-dotted rounded-xl"
      >
        <p className="ml-6 self-center">{answer.answer}</p>
      </div>
    ))
  );
}