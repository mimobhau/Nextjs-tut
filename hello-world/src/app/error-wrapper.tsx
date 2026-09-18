"use client";

import "./globals.css";

import { useState } from "react";

interface WrapperProps{
    children: React.ReactNode;
}

const ErrorSimulator = ({
    message = "An error occured",
}: {
    message?: string;
}) => {
    const [error, setError] = useState(false);
    // the hook is declared with false value
    
    if(error) throw new Error(message);
    // throws the error when hook 'setError'= "true", with the given message [default: "An error occured"]

    return(
        <button
            title="Simulate an error"
            className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-shadow-2xs"
            onClick={() => setError(true)}
        >
            {/* on clicking this button, it changes the value of the hook 'setError' as "true" */}
            Simulate Error
        </button>
    );
}

export const ErrorWrapper = ({children}: WrapperProps) => {
    return(
        <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
            <div className="absolute top-0 left-4 translate-y-0.5">
                <ErrorSimulator message="Simulated error in root layout" />
            </div>
            {children}
        </div>
    );
}