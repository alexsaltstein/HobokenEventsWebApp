import React from "react";
import { ErrorText } from "./ErrorText";

export const GenericInput = ({
  label,
  name,
  onChange,
  type,
  error,
  required,
  extraProps,
}) => {
  return (
    <div className={`relative ${extraProps}`}>
      <label
        htmlFor={label}
        className="absolute left-2 top-1 z-10 m-1 text-input-label-gray text-sm"
      >
        {label}
        {required ? <span className="text-red-400">*</span> : null}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        onChange={onChange}
        className="border mt-1 mb-1 rounded w-full h-12 pl-2 pt-5"
      />
      <ErrorText>{error?.[name]}</ErrorText>
    </div>
  );
};
