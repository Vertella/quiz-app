import React, { createContext, useState } from 'react';
import questions from "../data/questions.json";

// Create a context
const QuestionContext = createContext();


// Create a provider component
const QuestionProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [AnswerOptions, setAnswerOptions] = useState([]);
  const currentQuestionObj = questions[currentQuestion];
  const answerOptions = currentQuestionObj.answerOptions;
  const [allQuestions, setAllQuestions] = useState(false);
  const userSelections = [];
  const [userScore, setUserScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    if (prevQues >= 0) {setCurrentQuestion(prevQues);
    }
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
      nextQues < questions.length && setCurrentQuestion(nextQues)
      const nextAns = AnswerOptions.length + 1;
      nextAns < questions.length && setAnswerOptions([...AnswerOptions, nextAns]);
  };

  const handleComplete = () => {
    const totalQuestions = questions.length;
    if ((currentQuestion+1) === totalQuestions) {
      setAllQuestions(true);
      return true;
    }
  };

  const quizProgress = () => {
    return (
      currentQuestion + 1
    )
  };

  const handleUserSelection = (selectedAnswer) => {
    userSelections.push(selectedAnswer);
    const correctAnswer = answerOptions.find((option) => option.isCorrect);
    const userScoreAdder = userScore + 1;

    if (selectedAnswer === correctAnswer) {
      
      setUserScore(userScoreAdder);
      console.log(`Correct, Score: ${userScore}`);
    } else {
      console.log("Incorrect!");
    }
  };

  const quizComplete = () => {
    setIsQuizComplete(true);
  }

  // Provide the state and functions to the child components
  const contextValue = {
    currentQuestion,
    answerOptions,
    handlePrevious,
    handleNext,
    handleComplete,
    allQuestions,
    quizProgress,
    handleUserSelection,
    quizComplete,
    userScore,
    isQuizComplete,
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
