import React from "react";
import questions from "../../data/questions.json";
import { useQuestionContext } from "../../context/useQuestionContext";
import { AnswerOptions } from "./AnswerOptions";

function Question() {
    const { currentQuestion } = useQuestionContext();
    const currentQuestionObj = questions[currentQuestion];
    return (
        <>
        {currentQuestionObj.question}
        <AnswerOptions />
        </>
    );
}

export default Question;