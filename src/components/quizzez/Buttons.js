import React from "react";
import { useQuestionContext } from "@/context/useQuestionContext";

export function ButtonPre() {
    const { handlePrevious } = useQuestionContext();

    return (
        <button
            onClick={handlePrevious}
            className="w-[49%] py-3 bg-indigo-600 rounded-lg"
        >
            Previous
        </button>
  );
}

export function ButtonNext() {
    const { handleNext } = useQuestionContext();

    return (
        <button
            onClick={handleNext}
            className="w-[49%] py-3 bg-indigo-600 rounded-lg"
        >
            Next
        </button>
  );
}