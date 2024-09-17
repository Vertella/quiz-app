import React from "react";
import { useQuestionContext } from "@/context/useQuestionContext";



function QuizProgress() {
    const { quizProgress, totalQuestions } = useQuestionContext();

    return (
        <div className="p-4">
            <p className="text-lg font-semibold">
                Question {quizProgress()} of {totalQuestions} </p>
        </div>
    );
}

export default QuizProgress;