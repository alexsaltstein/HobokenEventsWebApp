import React from "react";

export const useScrollIntoView = (deps) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
};
