import React from "react";
import { Link } from "react-router-dom";
import "./eventItem.css";

export const EventItem = ({ eventData }) => {
  const { placeId, dayOfWeek, startTime, endTime, description, deals } =
    eventData;
  return (
    <div className="p-1 h-60 mt-5 mb-5">
      <Link to={`/place/${placeId}`}>
        <div className="relative md:flex drop-shadow-md transition duration-200 hover:shadow-xl border h-full z-0">
          <div className="absolute w-full h-full left-0 top-0 md:flex md:w-1/3 bg-white">
            <img
              src={
                "https://media.istockphoto.com/photos/blurred-bokeh-light-of-city-downtown-picture-id858204360?k=20&m=858204360&s=612x612&w=0&h=50ZaF59P3jAvvlQJ5HURHKLIZdOvHRJsQ1mnXwLdaHw="
              }
              alt="Event thumbnail"
              className="w-full h-full md:w-10/12 md:h-5/6 m-auto"
            />
          </div>
          <div className="absolute w-full bg-white z-10 h-1/2 left-0 top-32 md:w-2/3 md:h-full md:top-0 md:left-1/3">
            <div className="flex w-full md:relative md:top-4">
              <div className="w-1/4 mt-auto mb-auto text-center md:relative md:h-full md:w-full md:text-left">
                <p className="text-red-700 font-bold md:mr-2 md:absolute md:top-0">
                  {dayOfWeek}
                </p>
              </div>
              <div className="w-3/4 mt-2 mb-auto pr-4 overflow-hidden text-sm md:absolute md:w-full md:top-6">
                <p className="font-bold text-base truncate">{description}</p>
                <p className="truncate">
                  {startTime}
                  {endTime ? ` - ${endTime}` : null}
                </p>
                <p
                  className="max-h-6 md:max-h-24 truncate md:text-ellipsis md:whitespace-normal"
                  id="description"
                >
                  {deals.map((deal) => (
                    <p>{deal}</p>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
