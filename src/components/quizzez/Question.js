import React from "react";
import questions from "../../data/questions.json"; 
import { useQuestionContext } from "../../context/useQuestionContext";

function Question() {
    const { currentQuestion } = useQuestionContext();
    const currentQuestionObj = questions[currentQuestion];
    return (
        <>{currentQuestionObj.question}</>
    );
}

export default Question;