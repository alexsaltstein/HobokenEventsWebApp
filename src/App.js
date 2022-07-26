import "./index.css";
import React from "react";
// import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { EventList } from "./components/events/EventList";
import Header from "./components/header/Header";
import DatePicker from "react-datepicker";
import { formatDate } from "./utils/common";

export default function App() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  return (
    <div>
      <Header />
      <nav
        style={{
          paddingTop: "1rem",
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        {/* example link for use when we add events */}
        {/* <Link to="/happyhour">Happy Hour</Link> */}
        <DatePicker
          className="border ml-4"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          todayButton={<div>Today</div>}
        />
        <EventList
          title={`Happy Hours of ${formatDate(selectedDate)}`}
          url="https://reqres.in/api/users"
        />
      </nav>
    </div>
  );
}
