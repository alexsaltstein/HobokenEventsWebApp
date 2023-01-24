import React from "react";
import "./formStyle.css";

export default function Checkbox({ id, text, onClick }) {
  return (
    <>
      <div className="flex ml-auto w-full">
        <input type="checkbox" id={id} value={id} onClick={onClick}/>
        <label
          id="button"
          htmlFor={id}
          className="my-1.5 ml-2 outline-button-blue fill-white checked:bg-button-blue checked:text-white"
          onClick={onClick}
        >
          <p>{text}</p>
        </label>
      </div>
    </>
  );
}
