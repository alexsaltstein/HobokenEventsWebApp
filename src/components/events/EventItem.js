import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter, getDayColors } from "../../utils/common";
import "./eventItem.css";

export const EventItem = ({ eventData }) => {
  const {
    placeId,
    dayOfWeek,
    startTime,
    endTime,
    title,
    deals,
    place,
    googleInfo,
  } = eventData;

  return (
    <div>
      <Link to={`/place/${placeId}`}>
        <div className="flex items-center gap-x-2 bg-white border p-4 h-full drop-shadow-md transition duration-200 hover:shadow-lg border z-30">
          <img
            width={32}
            height={32}
            alt="Google place icon"
            src={googleInfo.icon}
          />
          <div>
            <div className="flex">
              {dayOfWeek.map((day, index) => (
                <p className={`font-bold ${getDayColors(day)}`}>
                  {capitalizeFirstLetter(day)}
                  {index !== dayOfWeek.length - 1 ? ", " : null}
                </p>
              ))}
            </div>
            <div>
              <p className="font-bold text-base truncate">{title}</p>
              <p className="italic opacity-75">{place.name}</p>
              <p className="truncate">
                {startTime}
                {endTime ? ` - ${endTime}` : null}
              </p>
              <div className="md:whitespace-normal" id="description">
                {deals.map((deal, index) => (
                  <p key={`${deal._id}-${deal}-${index}`}>∙{deal}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
