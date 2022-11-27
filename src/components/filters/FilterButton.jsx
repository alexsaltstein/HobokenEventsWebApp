import React from "react";
import Badge from "../../badge/Badge";

export default function FilterButton({ children, badgeChildren, disable }) {
  return (
    <div className="relative">
      {badgeChildren ? <Badge children={badgeChildren} /> : null}
      <button
        disabled={disable ? true : null}
        type="button"
        className={`${
          disable ? "text-gray-300" : "text-input-label-gray"
        } border-b-2 border-transparent ${
          disable ? null : "hover:text-button-blue"
        } focus:text-button-blue font-semibold text-sm px-2 py-2.5 text-center mr-2 mb-2 focus:border-b-2 focus:border-button-blue`}
      >
        {children}
      </button>
    </div>
  );
}
