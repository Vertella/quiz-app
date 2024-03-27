//Form to add a new question.
// components/admin/AddQuestion.js
import { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';

const AddQuestion = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']); // Collect answer options

  const { addQuestion } = useQuiz(); // Implement addQuestion function

  const handleAddQuestion = () => {
    // Validate and add the new question to the context
    addQuestion({
      question: newQuestion,
      options: options.map((text) => ({ text, isCorrect: false })),
    });
    // Clear form fields
    setNewQuestion('');
    setOptions(['', '', '', '']);
  };

  return (
    <div>
      <h2>Add New Quiz Question</h2>
      <input
        type="text"
        placeholder="Enter question text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      {/* Input fields for answer options */}
      {/* Add button to submit the new question */}
    </div>
  );
};

export default AddQuestion;
