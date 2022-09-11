import "./index.css";
import React from "react";
// import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { EventList } from "./components/events/EventList";
import Header from "./components/header/Header";
import DatePicker from "react-datepicker";
import { formatDate, getDayOfWeek } from "./utils/common";

export default function App() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  console.log(selectedDate.getDay());

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
          className="border ml-4 relative top-12 -z-10"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          todayButton={<div>Today</div>}
        />
        <EventList
          title={`Happy Hours of ${formatDate(selectedDate)}`}
          url={`${
            process.env.REACT_APP_API_URL
          }/api/deal?approved=true&dayOfWeek=${getDayOfWeek(
            selectedDate.getDay()
          )}`}
        />
      </nav>
    </div>
  );
}
