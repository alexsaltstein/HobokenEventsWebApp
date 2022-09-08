import React from "react";
import { ErrorText } from "./ErrorText";

export const GenericInput = ({
  label,
  name,
  onChange,
  type,
  error,
  required,
}) => {
  return (
    <div>
      <p>
        {label}
        {required ? <span className="text-red-400">*</span> : null}
      </p>
      <input
        className={`border ${error?.[name] ? "border-red-400" : null}`}
        onChange={onChange}
        type={type}
      />
      <ErrorText>{error?.[name]}</ErrorText>
    </div>
  );
};
