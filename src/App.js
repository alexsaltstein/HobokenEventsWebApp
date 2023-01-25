import "./index.css";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import { useSearchParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { EventList } from "./components/events/EventList";
import { Calendar } from "../src/components/calendar/Calendar";
import { getDayOfWeek, isValidDate } from "./utils/common";
import Banner from "./components/banner/Banner";
import { BannerAd } from "./components/ads/BannerAd";
import { Helmet } from "react-helmet";
import { GoogleTags } from "./meta/GoogleTags";

export default function App() {
  console.log(process.env.REACT_APP_GOOGLE_TAG_ID);

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
    <div className="overflow-y-hidden overflow-x-hidden">
      <GoogleTags />
      <Banner />
      <div>
        <Calendar selectedDate={selectedDate} onDateChange={onDateChange} />
        <div className="drop-shadow-md">
          <EventList
            url={`${
              process.env.REACT_APP_API_URL
            }/api/deal?approved.state=active&dayOfWeek=${getDayOfWeek(
              selectedDate.getDay()
            )}`}
          />
        </div>
      </div>
      <div className="lg:hidden max-w-full max-h-fit mt-4 mx-4">
        <BannerAd />
      </div>
    </div>
  );
}
