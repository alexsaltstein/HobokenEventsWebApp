import "./index.css";
import React from "react";
// import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { EventList } from "./components/events/EventList";
import DatePicker from "react-datepicker";
import {
  capitalizeFirstLetter,
  getDayColors,
  getDayOfWeek,
} from "./utils/common";
import Banner from "./components/banner/Banner";
import FilterBar from "./components/filters/FilterBar";

export default function App() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="">
      <Banner />
      <div className="flex top-16 ml-4 gap-x-2 flex-wrap m-auto">
        <h1 className="text-black font-bold text-xl">What's happening on...</h1>
        <DatePicker
          id="datePicker"
          className="z-0 w-14 font-semibold text-md text-hoboken-blue underline"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          todayButton={<div>Today</div>}
        />
        <span>
          Current day:{" "}
          <span className={`${getDayColors(selectedDate.getDay())} font-bold`}>
            {capitalizeFirstLetter(getDayOfWeek(selectedDate.getDay()))}
          </span>
        </span>
      </div>
      <FilterBar />
      <EventList
        url={`${
          process.env.REACT_APP_API_URL
        }/api/deal?approved=true&dayOfWeek=${getDayOfWeek(
          selectedDate.getDay()
        )}`}
      />
    </div>
  );
}
