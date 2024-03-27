//Display a list of existing questions.
import { useQuiz } from '../../context/QuizContext';

const AdminQuestions = () => {
  const { questions } = useQuiz();

  return (
    <div>
      <h2>Existing Quiz Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.question} {/* Display question text */}
            {/* Add buttons for editing and deleting */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminQuestions;
