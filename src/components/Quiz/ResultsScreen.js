import React from "react";
import { useQuestionContext } from "@/context/useQuestionContext";
import questions from "../../data/questions.json";



function ResultsScreen() {
    const { userSelections, userScore } = useQuestionContext();

    return (
    <div className="text-center w-full h-full">
      <h2 className="text-2xl font-bold">Results</h2>
      <p className="my-4">Your Score: {userScore}/{userSelections.length}</p>

      <div className="mt-6">
        {userSelections.map((result, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold text-xl">
              Question {index + 1}: {result.question}
            </p>
            <p className="text-lg">
              Your answer: <span className={result.isCorrect ? "text-green-500" : "text-red-500"}>{result.selectedAnswer.answer}</span>
            </p>
            {result.isCorrect ? (
              <p className="text-green-500">Correct!</p>
            ) : (
              <p className="text-red-500">Incorrect</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsScreen;