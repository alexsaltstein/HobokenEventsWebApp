import React from "react";
import "./formStyle.css"

export default function Checkbox({id, text, callback}) {
    return (
        <>
            <div className="ml-3">
                <input
                type="checkbox"
                id={id}
                value={id}
                />
                <label id='button' for={id} className="circle outline outline-button-blue fill-white checked:bg-button-blue checked:text-white" onClick={() => callback}>
                <p className='text'>{text}</p>
                </label>
            </div>
        </>
    );
}