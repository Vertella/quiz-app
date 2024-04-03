// components/Quiz.js
import React from 'react';
import Question from './Question';
import ResultsScreen from './ResultsScreen';
import { useQuestionContext } from '@/context/useQuestionContext';
import { ButtonComplete, ButtonNext, ButtonPre } from './Buttons';


function Quiz() {
  const {currentQuestion,
  answerOptions,
  handlePrevious,
  handleNext,
  showResults,
  handleComplete,
  allQuestions,
} = useQuestionContext();

const handleResults = () => {

}
  return (
    <div>
      {showResults ? (
        <ResultsScreen />
      ) : (
        <Question
        currentQuestion={currentQuestion}
        answerOptions={answerOptions} />
      )}

      <div className="flex w-full justify-evenly align-end self-center md:w-10/12 mt-4 text-white">
        <ButtonPre 
        handlePrevious={handlePrevious}
          />
        {handleComplete() ? (
          <ButtonComplete />
        ) : (
          <ButtonNext />
        )}
      </div>
    </div>
  );
};


export default Quiz;