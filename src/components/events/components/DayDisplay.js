import React from "react";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import { DAYS_ENUM, getDayColors } from "../../../utils/common";

export const DayDisplay = ({ availableDays }) => {
  return (
    <div tw="flex space-x-2">
      {Object.keys(DAYS_ENUM).map((key) => {
        const day = DAYS_ENUM[key];
        const text = key.substring(
          0,
          key.startsWith("T") || key.startsWith("S") ? 2 : 1
        );
        return (
          <div tw="flex flex-col items-center text-sm">
            <p
              className={`${
                availableDays.includes(day)
                  ? "text-black"
                  : "text-input-label-gray opacity-50"
              }`}
            >
              {text}
            </p>
            <div
              tw="w-2 h-2 rounded-full"
              className={`${
                availableDays.includes(day)
                  ? getDayColors(day, true)
                  : "bg-light-gray"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};
