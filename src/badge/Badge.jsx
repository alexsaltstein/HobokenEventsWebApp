import React from "react";

export default function Badge({ children }) {
    return (
        <>
            <span class="absolute left-8 -top-2 h-5 w-auto whitespace-nowrap bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 rounded-lg">{children}</span>
        </>
    );
}