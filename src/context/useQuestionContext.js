// context/useQuestionContext.js
import { useContext } from 'react';
import { QuestionContext } from './QuizContext'; // Adjust the path as needed

export function useQuestionContext() {
  return useContext(QuestionContext);
}