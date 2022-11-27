import React from "react";

export const useScrollIntoView = (deps) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) {
      console.log("here");
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, deps);

  return ref;
};
