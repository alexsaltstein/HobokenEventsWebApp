import "./index.css";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { EventList } from "./components/events/EventList";
import { Calendar } from "../src/components/calendar/Calendar";
import { getCurrPage, getDayOfWeek, isValidDate } from "./utils/common";
import Banner from "./components/banner/Banner";
import { BannerAd } from "./components/ads/BannerAd";
import { GoogleTags } from "./meta/GoogleTags";
import { FilterMenuDesktop } from "./components/filters/FilterMenu";
import { FilterBottomSheet } from "./components/filters/FilterBottomSheet";
import { FilterIcon } from "./components/icons/Icons";
import { INITIAL_FILTER } from "./constants/common";
import axios from "axios";
import { PageNumbers } from "./utils/PageNumbers";
import { useScrollIntoView } from "./utils/useScrollIntoView";

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setOpen] = useState(false);
  const [numResults, setNumResults] = useState();
  const [filters, setFilters] = useState(INITIAL_FILTER);
  let filterResult = Object.keys(filters)
    .filter((k) => filters[k])
    .map((i) => `tags[]=${i}`)
    .join("&");

  filterResult = filterResult.replace("tags[]=hobo&", "");
  filterResult = filterResult.replace("tags[]=hobo", "");
  filterResult = filterResult.replace("tags[]=jc", "");
  filterResult = filterResult.replace("tags[]=active", "");

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

  const [totalPages, setTotalPages] = React.useState(0);
  React.useEffect(() => {
    (async () => {
      const url = `${
        process.env.REACT_APP_API_URL
      }/api/deal/count?approved.state=active&dayOfWeek=${getDayOfWeek(
        selectedDate.getDay()
      )}&${filterResult}${filters.hobo ? "&city=Hoboken" : ""}${
        filters.jc ? "&city=Jersey City" : ""
      }${filters.active ? `&active=${filters.active}` : ""}`;
      const res = await axios.get(url);
      setTotalPages(res.data / 20);
    })();
  }, [filters, selectedDate]);

  const currPage = getCurrPage(searchParams, totalPages);

  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      <GoogleTags />
      <Banner />
      <div className="flex">
        <div>
          <EventList
            url={`${
              process.env.REACT_APP_API_URL
            }/api/deal?approved.state=active&pageNum=${currPage}&dayOfWeek=${getDayOfWeek(
              selectedDate.getDay()
            )}&${filterResult}${filters.hobo ? "&city=Hoboken" : ""}${
              filters.jc ? "&city=Jersey City" : ""
            }${filters.active ? `&active=${filters.active}` : ""}`}
            setNumResults={setNumResults}
            menu={
              <FilterMenuDesktop filters={filters} setFilters={setFilters} />
            }
            calendar={
              <Calendar
                selectedDate={selectedDate}
                onDateChange={onDateChange}
                filterButton={
                  <button
                    className="h-6 w-6 right-6 lg:hidden"
                    onClick={() => setOpen(true)}
                  >
                    <FilterIcon
                      fill={isOpen ? "#007bc7" : "none"}
                      stroke={isOpen ? "none" : "#6f7287"}
                      tw={"w-7 h-7"}
                    />
                  </button>
                }
              >
                <FilterBottomSheet
                  isOpen={isOpen}
                  setOpen={setOpen}
                  filters={filters}
                  setFilters={setFilters}
                  numResults={numResults}
                />
              </Calendar>
            }
          />
          <div className="w-full flex justify-center">
            <PageNumbers currPage={currPage} totalPages={totalPages} />
          </div>
          <div className="max-w-full max-h-fit mt-4 mx-4">
            <BannerAd />
          </div>
        </div>
        <div className="hidden border border-red-500">{/* PUT MAP HERE */}</div>
      </div>
    </div>
  );
}
