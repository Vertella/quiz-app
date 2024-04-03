import React, { createContext, useState } from 'react';
import questions from "../data/questions.json";

// Create a context
const QuestionContext = createContext();


// Create a provider component
const QuestionProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const currentQuestionObj = questions[currentQuestion];
  const answerOptions = currentQuestionObj.answerOptions;
  const [allQuestions, setAllQuestions] = useState(false);

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    if (prevQues >= 0) {setCurrentQuestion(prevQues);
    }
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
      nextQues < questions.length && setCurrentQuestion(nextQues)
      const nextAns = selectedOptions + 1;
      nextAns < questions.length && setSelectedOptions([...selectedOptions, nextAns]);
    console.log(currentQuestion);
  };

  const handleComplete = () => {
    const totalQuestions = questions.length;
    console.log(questions.length);
    console.log(selectedOptions.length);
    if ((currentQuestion+1) === totalQuestions) {
      setAllQuestions(true);
      return true;
    }
  };

  // Provide the state and functions to the child components
  const contextValue = {
    currentQuestion,
    answerOptions,
    handlePrevious,
    handleNext,
    handleComplete,
    allQuestions,
  };

  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
};

export function useQuestionContext() {
  return useContext(QuestionContext);
}

export { QuestionContext, QuestionProvider };
