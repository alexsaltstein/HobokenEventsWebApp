import React from "react";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import { capitalizeFirstLetter } from "../../../utils/common";

export const TagsDisplay = ({ tags, className }) => {
  return (
    <div tw="flex gap-2 flex-wrap" className={className}>
      {tags.map((tag) => {
        return (
          <div tw="text-sm bg-light-gray rounded px-2 py-1 flex-wrap">
            <p>{capitalizeFirstLetter(tag).replace("_", " ")}</p>
          </div>
        );
      })}
    </div>
  );
};
