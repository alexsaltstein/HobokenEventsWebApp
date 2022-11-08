import React from "react";
import "./formStyle.css";

export default function Checkbox({ id, text, onClick }) {
  return (
    <>
      <div className="ml-3">
        <input type="checkbox" id={id} value={id} />
        <label
          id="button"
          htmlFor={id}
          className="circle outline-button-blue fill-white checked:bg-button-blue checked:text-white"
          onClick={onClick}
        >
          <p className="text pb-1">{text}</p>
        </label>
      </div>
    </>
  );
}
