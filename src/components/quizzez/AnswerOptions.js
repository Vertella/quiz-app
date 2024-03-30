import React from "react";
import questions from "../../data/questions.json";
import { useQuestionContext } from "@/context/useQuestionContext";

export function AnswerOptions() {
  const { answerOptions } = useQuestionContext();

  return (

    answerOptions.map((answer, index) => (
      <div
        key={index}
        className="flex items-center py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
      >
        <p className="ml-6 text-white">{answer.answer}</p>
      </div>
    ))
  );
}