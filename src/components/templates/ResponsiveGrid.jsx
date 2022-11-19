import React from "react";

export const ResponsiveGrid = ({ children }) => {
  return (
    <div className="md:mx-10 grid grid-flow-row gap-4 xl:grid-cols-3 grid-cols-1 md:grid-cols-2">
      {children}
    </div>
  );
};
