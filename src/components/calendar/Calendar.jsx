import "twin.macro"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { isMobile } from "react-device-detect";
import {
  capitalizeFirstLetter,
  getDayColors,
  getDayOfWeek,
} from "../../utils/common";
import { CalendarIcon, FilterIcon } from "../icons/Icons";
import { ResponsiveGridHP } from "../templates/ResponsiveGrid";
import { FilterBottomSheet } from "../filters/FilterMenu";


export const Calendar = ({ selectedDate, onDateChange }) => {
  const [isOpen, setOpen] = useState(false);

  const DateButton = React.forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className="flex items-center gap-x-2">
      <span
        className={`${getDayColors(selectedDate.getDay())} font-bold text-xl`}
      >
        {capitalizeFirstLetter(getDayOfWeek(selectedDate.getDay()))}
      </span>
      <div className="bg-button-blue rounded px-3 py-1 text-white flex gap-x-1 text-lg">
        <CalendarIcon tw="h-6 w-6 mr-2"/>
        {value}
      </div>
    </button>
  ));
  return (
    <>
      <ResponsiveGridHP>
        <div />
        <div className="flex justify-between">
          <div className="flex gap-x-2 mt-2 ml-8 lg:ml-4 items-center flex-wrap max-w-full">
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
              minDate={new Date()}
            />
          </div>
          <button className="relative h-6 w-6 top-14 right-8 md:top-5 lg:hidden" onClick={() => setOpen(true)}>
            <FilterIcon fill={isOpen ? "#007bc7" : "none"} stroke={isOpen ? "none" : "#6f7287"}/>
          </button>
        </div>
      </ResponsiveGridHP>
      <FilterBottomSheet isOpen={isOpen} setOpen={setOpen}/>
    </>
  );
};
