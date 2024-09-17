import React, { createContext, useState } from 'react';
import questions from "../data/questions.json";

// Create a context
const QuestionContext = createContext();


// Create a provider component
const QuestionProvider = ({ children }) => {
  // State for managing the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // State for storing user selections and score
  const [userSelections, setUserSelections] = useState([]);
  const [userScore, setUserScore] = useState(0);

  // State for tracking if the quiz is complete
  const [isQuizComplete, setIsQuizComplete] = useState(false);

   // Get the current question and its answer options
   const currentQuestionObj = questions[currentQuestion];
   const answerOptions = currentQuestionObj.answerOptions;

  // Handle going to the previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  // Handle moving to the next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  

  const handleUserSelection = (selectedAnswer) => {
    if (userSelections.length > currentQuestion) return;
    // Check if the selected answer is correct
    const correctAnswer = answerOptions.find((option) => option.isCorrect);
    if (selectedAnswer === correctAnswer) {
      setUserScore((prevScore) => prevScore + 1);
    }

    // Update user selections
    setUserSelections((prevSelections) => [...prevSelections, selectedAnswer]);

    if (currentQuestion === questions.length - 1) {
      setIsQuizComplete(true);
    } else {
      handleNext();
    }
  };
  
    const quizProgress = () => {
      return (
        currentQuestion + 1
      )
    };

  // Provide the state and functions to the child components
  const contextValue = {
    currentQuestion,
    answerOptions,
    questions,
    totalQuestions: questions.length,
    handlePrevious,
    handleNext,
    handleUserSelection,
    quizProgress,
    userScore,
    isQuizComplete,
  };

  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
