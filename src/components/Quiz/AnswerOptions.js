import React, { useState } from "react";
import { useQuestionContext } from "@/context/useQuestionContext";


export function AnswerOptions() {
  const { answerOptions, handleUserSelection } = useQuestionContext();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (answer) => {
    setSelectedOption(answer);
    handleUserSelection(answer); // Call your existing handler
  };

  return (
    <div>
    {answerOptions.map((answer, index) => (
      <div
        key={index}
        onClick={() => handleOptionClick(answer)}
        className={`flex py-3 m-2 ml-0 space-x-2 border-2 cursor-pointer rounded-xl 
        ${
          selectedOption === answer
              ? "bg-fuchsia-800 border-fuchsia-900"
              : "bg-indigo-950 border-violet-950 hover:text-yellow-500 hover:bg-violet-900 hover:border-dotted"
        }`}
        >
        <p className="ml-6 self-center">{answer.answer}</p>
      </div>
    ))}
    </div>
  );
}