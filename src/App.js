import "./index.css";
import React from "react";
// import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { EventList } from "./components/events/EventList";
import DatePicker from "react-datepicker";
import { getDayOfWeek } from "./utils/common";
import Banner from "./components/banner/Banner";
import FilterBar from "./components/filters/FilterBar";

export default function App() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-y-scroll">
      <Banner />
      <div className="relative flex top-16 ml-4 w-screen flex-wrap m-auto">
        <h1 className="text-black font-bold text-xl">
          What's happening on...{" "}
        </h1>
        <DatePicker
          id="datePicker"
          className="ml-2 mt-1 z-0 w-14 font-semibold text-md text-hoboken-blue underline"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          todayButton={<div>Today</div>}
        />
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
