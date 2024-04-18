import React from "react";
import { useQuestionContext } from "@/context/useQuestionContext";
import questions from "../../data/questions.json";



function ResultsScreen() {
    const { userScore } = useQuestionContext();
    return (
        <div>
            <p>Your score:</p>
            <p>{userScore}/{questions.length}</p>
            
        </div>
       
    );
}

export default ResultsScreen;