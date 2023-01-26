import React from "react";

export const ResponsiveGridHP = ({ children }) => {
  return (
    <div className="lg:mx-4 grid grid-flow-row gap-2 lg:grid-cols-[10%_80%_10%] grid-cols-1">
      {children}
    </div>
  );
};

export const ResponsiveGrid = ({ children }) => {
  return (
    <div className="grid grid-flow-row gap-4 xl:grid-cols-5 lg:grid-cols-4 grid-cols-1 md:grid-cols-2">
      {children}
    </div>
  );
};
