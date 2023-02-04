import React from "react";

export default function DaySelect({ id, text, onClick }) {
  return (
    <>
      <div className="mx-1.5" id="daySelect">
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
