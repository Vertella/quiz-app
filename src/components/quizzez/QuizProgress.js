import React from "react";
import { useQuestionContext } from "@/context/useQuestionContext";
import questions from "../../data/questions.json";


function QuizProgress() {
    const { currentQuestion, quizProgress } = useQuestionContext();

    return (
        <div>
            <p>Question {quizProgress()} of {questions.length} </p>
        </div>
    );
}

export default QuizProgress;