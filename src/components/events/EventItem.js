import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReportModal from "./ReportModal";
import {
  abreviateDay,
  capitalizeFirstLetter,
  getDayColors,
} from "../../utils/common";

export const EventItem = ({ eventData, onClickReport, setReportedDeal, setReportedPlace }) => {
  const { placeId, dayOfWeek, startTime, endTime, title, deals, place } =
    eventData;

  return (
    <div className="font-sans">
        <div className="bg-white border p-4 h-full drop-shadow-md transition duration-200 hover:shadow-lg z-30">
        <Link to={`/place/${placeId}`}>
          <div>
            <p className="font-semibold opacity-75 text-2xl mb-1">{title}</p>
            <div className="flex flex-wrap mt-1 text-xs">
            {dayOfWeek.map((day) => {
              const abreviation = abreviateDay(capitalizeFirstLetter(day));
              return (
                <p
                  className={`font-semibold ${getDayColors(
                    day, true
                  )} px-3 mt-1 mb-2 mr-1 border-current rounded p-1`}
                  key={day}
                >
                  {abreviation}
                </p>
              );
            })}
          </div>
          <div className="flex">
            <svg class="w-6 h-6 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <p className="mb-1">{place.name}</p>
          </div>
            <div className="flex">
              <svg class="w-6 h-6 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p className="mb-2">
                {startTime}
                {endTime ? ` - ${endTime}` : null}
              </p>
            </div>
            <hr />
            <div className="md:whitespace-normal my-2" id="description">
              {deals.map((deal, index) =>
                deal.includes("https") ? (
                  <button
                    key={`${deal._id}-${deal}-${index}`}
                    onClick={(event) => {
                      event.preventDefault();
                      window.location = deal;
                      event.stopPropagation();
                    }}
                    className="text-hoboken-blue hover:underline text-xl"
                  >
                    View deal menu
                  </button>
                ) : (
                  <p className="text-gray-700" key={`${deal._id}-${deal}-${index}`}>∙{deal}</p>
                )
              )}
            </div>
            
          </div>
          </Link>
          <div className="hidden float-right mb-4"> {/* should be flex when reporting is implemented */}
              <svg class="w-6 h-6 text-red-400 mr-1 pt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              <button className="text-red-400 z-20"
                onClick={() => {
                  onClickReport(true)
                  setReportedDeal(title)
                  setReportedPlace(place.name)
                }}
              >Report this deal</button>
          </div>
        </div>
    </div>
  );
};
