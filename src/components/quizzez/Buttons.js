import React from "react";
import { useQuestionContext } from "@/context/useQuestionContext";

export function ButtonPre() {
    const { handlePrevious } = useQuestionContext();

    return (
        <button
            onClick={handlePrevious}
            className="w-32 md:w-40 py-3 bg-violet-900 rounded-lg"
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
            className="w-32 md:w-40 py-3 bg-violet-900 text-slate-300 rounded-lg"
        >
            Next
        </button>
  );
}

export function ButtonComplete() {
    const { handleComplete } = useQuestionContext();

    return (
        <button
            onClick={handleComplete}
            className="w-32 md:w-40 py-3 bg-red-800 rounded-lg"
        >
            Complete
        </button>
  );
}