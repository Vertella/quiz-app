import React, { createContext, useState } from 'react';
import questions from "../data/questions.json";

// Create a context
const QuestionContext = createContext();

export function useQuestionContext() {
  return useContext(QuestionContext);
}


// Create a provider component
const QuestionProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);


  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    // Assuming questions is an array of questions
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  // Provide the state and functions to the child components
  const contextValue = {
    currentQuestion,
    handlePrevious,
    handleNext,
  };

  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
