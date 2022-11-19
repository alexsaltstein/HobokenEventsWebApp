import react from 'react'
import DatePicker from "react-datepicker";
import { isMobile } from 'react-device-detect';
import {
    capitalizeFirstLetter,
    getDayColors,
    getDayOfWeek,
  } from "../../utils/common";

export const Calendar = ({selectedDate, setSelectedDate}) => {
    return (
        <div className="flex top-16 ml-4 gap-x-2 flex-wrap m-auto mt-4 ">
        <h1 className="text-black font-bold text-xl">What's happening on...</h1>
        {isMobile ? (<DatePicker
          id="datePicker"
          className="z-0 h-1/2 font-semibold text-md text-hoboken-blue underline"
          selected={selectedDate}
          withPortal
          onChange={(date) => setSelectedDate(date)}
          todayButton={<div>Today</div>}
        />): (<DatePicker
          id="datePicker"
          className="z-0 h-1/2 font-semibold text-md text-hoboken-blue underline"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          todayButton={<div>Today</div>}
        />)}

        <span>
          Current day:{" "}
          <span className={`${getDayColors(selectedDate.getDay())} font-bold`}>
            {capitalizeFirstLetter(getDayOfWeek(selectedDate.getDay()))}
          </span>
        </span>
      </div>
    )
}