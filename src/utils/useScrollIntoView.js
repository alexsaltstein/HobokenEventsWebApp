import React from "react";

export const useScrollIntoView = (deps) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [deps]);

  return ref;
};
