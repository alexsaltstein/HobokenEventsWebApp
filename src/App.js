import "./index.css";
import React from "react";
// import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { EventList } from "./components/events/EventList";
import { Calendar } from "../src/components/calendar/Calendar";
import { getDayOfWeek } from "./utils/common";
import Banner from "./components/banner/Banner";
import FilterBar from "./components/filters/FilterBar";

export default function App() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div>
      <Banner />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
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
