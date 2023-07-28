import React from "react";
import "../form/formStyle.css";

export default function RadioButton({ id, text, checked, onClick, extraProps }) {
  return (
    <>
      <div className="flex w-full px-8 lg:px-0 py-1 justify-between">
        <label
          id="button"
          htmlFor={id}
          className={` outline-button-blue fill-white checked:bg-button-blue checked:text-white ${extraProps}`}
          onChange={onClick}
        >
          <p>{text}</p>
        </label>
        <input type="radio" id={id} value={id} checked={checked} onChange={onClick} name="radio" className="w-6 lg:ml-8"/>
      </div>
    </>
  );
}
