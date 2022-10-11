import React from "react";

export const ErrorText = ({ children, extraProps }) => {
  return <p className={`text-red-400 italic ${extraProps}`}>{children}</p>;
};
