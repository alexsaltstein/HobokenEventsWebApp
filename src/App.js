import "./index.css";
import React from "react";
import { useSearchParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { EventList } from "./components/events/EventList";
import { Calendar } from "../src/components/calendar/Calendar";
import { getDayOfWeek, isValidDate } from "./utils/common";
import Banner from "./components/banner/Banner";
import FilterBar from "./components/filters/FilterBar";

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onDateChange = (date) => {
    setSelectedDate(date);
    setSearchParams({ date });
  };

  // need to do the bad date cause null is a valid date
  const queryDate = searchParams.get("date")
    ? new Date(searchParams.get("date"))
    : "bad date";

  const initialDate = isValidDate(queryDate) ? queryDate : new Date();
  const [selectedDate, setSelectedDate] = React.useState(initialDate);

  return (
    <div className="overflow-y-hidden">
      <Banner />
      <Calendar selectedDate={selectedDate} onDateChange={onDateChange} />
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
