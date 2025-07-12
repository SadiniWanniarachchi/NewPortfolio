import React from "react";

export function TailwindIcon({ className }: { className?: string }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <title>Tailwind CSS</title>
            <path
                fill="#06B6D4"
                d="M12 7c3.243 0 4.875 1.867 6 3.867-1.333 2-2.933 3.333-6 3.333-2.167 0-3.5-1.333-5-2.333l-1 1.333C7.25 14.167 8.667 15 12 15c3.75 0 5.417-2.167 7-4.167-1.5-2.167-3.5-4.167-7-4.167-2.5 0-4 1.333-5.333 2.667L7 10c1.167-1 2.5-3 5-3z"
            />
            <path
                fill="#0EA5E9"
                d="M12 3c4.75 0 6.5 3.167 8 5.667-2 3-4.667 5.333-8 5.333-3.417 0-5-2.167-6.5-3.667l-1 1.333C7 12.667 9.75 15 12 15c4.333 0 6.5-3 8-5.667-2-3.5-4.5-6.333-8-6.333-3 0-4.833 2-6.333 3.667L7 8C8.167 6.333 9.833 3 12 3z"
            />
        </svg>
    );
}
