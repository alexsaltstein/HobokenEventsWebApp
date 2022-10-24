import React from "react";
import { ErrorText } from "./ErrorText";

export const GenericInput = ({
  label,
  subtext,
  name,
  onChange,
  type,
  error,
  placeholder,
  required,
  extraProps,
  icon,
  value,
}) => {
  return (
    <div className={`relative ${extraProps}`}>
      <label
        htmlFor={label}
        className="absolute left-1 top-1 z-10 m-1 text-input-label-gray text-sm"
      >
        {label}
        <label className="text-input-label-gray text-xs italic">&nbsp;{subtext}</label>
        {required ? <span className="text-red-400">*</span> : null}
      </label>
      <div className="absolute right-2 top-4">
        <svg className="w-6 h-6 relative float-right" fill="none" stroke="#A6A6A6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {icon}
        </svg>
      </div>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border mt-1 mb-1 rounded w-full h-12 pl-2 pt-5"
      />
      <ErrorText>{error?.[name]}</ErrorText>
    </div>
  );
};
