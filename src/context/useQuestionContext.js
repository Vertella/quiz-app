// context/useQuestionContext.js
import { useContext } from 'react';
import { QuestionContext } from './QuizContext';

export function useQuestionContext() {
  return useContext(QuestionContext);
}