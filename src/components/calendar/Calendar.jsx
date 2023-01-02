import React from "react";
import DatePicker from "react-datepicker";
import { isMobile } from "react-device-detect";
import {
  capitalizeFirstLetter,
  getDayColors,
  getDayOfWeek,
} from "../../utils/common";
import { CalendarIcon } from "../icons/Icons";

export const Calendar = ({ selectedDate, onDateChange }) => {
  const DateButton = React.forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className="flex items-center gap-x-2">
      <span
        className={`${getDayColors(selectedDate.getDay())} font-bold text-xl`}
      >
        {capitalizeFirstLetter(getDayOfWeek(selectedDate.getDay()))}
      </span>
      <div className="bg-button-blue rounded px-3 py-1 text-white flex gap-x-1 text-lg">
        <CalendarIcon tw="mr-2"/>
        {value}
      </div>
    </button>
  ));
  return (
    <div className="flex ml-8 mr-8 gap-x-2 mt-4 items-center flex-wrap max-w-full">
      <h2 className="text-black font-bold text-xl my-1">
        What's happening:
      </h2>
      <DatePicker
        id="datePicker"
        selected={selectedDate}
        withPortal={isMobile}
        customInput={<DateButton />}
        onChange={onDateChange}
        todayButton={<div>Today</div>}
      />
    </div>
  );
};
