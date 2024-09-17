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

export function ButtonNext({handleNext}) {
    return (
        <button
            onClick={handleNext}
            className="w-32 md:w-40 py-3 bg-violet-900 text-slate-300 rounded-lg"
        >
            Next
        </button>
  );
}

export function ButtonComplete({handleResults}) {
    return (
        <button
            onClick={handleResults}
            className="w-32 md:w-40 py-3 bg-red-800 rounded-lg"
        >
            Complete
        </button>
  );
}