import "twin.macro";
import React from "react";
import DatePicker from "react-datepicker";
import { isMobile } from "react-device-detect";
import {
  capitalizeFirstLetter,
  getDayColors,
  getDayOfWeek,
} from "../../utils/common";
import { CalendarIcon } from "../icons/Icons";

export const Calendar = ({
  selectedDate,
  onDateChange,
  filterButton,
  children,
}) => {
  const DateButton = React.forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className="flex items-center gap-x-2">
      <span
        className={`${getDayColors(selectedDate.getDay())} font-bold text-xl`}
      >
        {capitalizeFirstLetter(getDayOfWeek(selectedDate.getDay()))}
      </span>
      <div className="bg-button-blue rounded px-3 py-1 text-white flex gap-x-1 text-lg">
        <CalendarIcon tw="h-6 w-6 mr-2" />
        {value}
      </div>
    </button>
  ));
  return (
    <>
      <div className="flex mb-4 w-screen">
        <div className="flex px-8 md:px-0 w-screen flex-col md:flex-row md:gap-x-2 mt-4 md:mx-8 md:items-center md:flex-wrap max-w-full">
          <h2 className="flex text-black font-bold text-xl my-1 justify-between">
            What's happening:
            <div className="md:hidden">
              {filterButton}
            </div>
          </h2>
          <DatePicker
            id="datePicker"
            selected={selectedDate}
            withPortal={isMobile}
            customInput={<DateButton />}
            onChange={onDateChange}
            todayButton={<div>Today</div>}
            minDate={new Date()}
          />
          <div className="fold:max-md:hidden absolute md:relative right-0 md:top-0 ml-auto">
            {filterButton}
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
