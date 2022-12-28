import React from "react";
import { Link } from "react-router-dom";
import {
  abreviateDay,
  capitalizeFirstLetter,
  getDayColors,
} from "../../utils/common";
import { CautionIcon, TimerIcon, LocationIcon } from "../icons/Icons";
import ReportModal from "./ReportModal";

export const EventItem = ({ eventData }) => {
  const [showReportModal, setShowReportModal] = React.useState(false);
  const { placeId, dayOfWeek, startTime, endTime, title, deals, place } =
    eventData;

  React.useEffect(() => {
    if (showReportModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showReportModal]);

  return (
    <div className="font-sans">
      {showReportModal ? (
        <ReportModal
          shown={showReportModal}
          title={`Report ${place.name} by ${title}`}
          onDismiss={() => setShowReportModal(false)}
        />
      ) : null}
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
                      day,
                      true
                    )} px-3 mt-1 mb-2 mr-1 border-current rounded p-1`}
                    key={day}
                  >
                    {abreviation}
                  </p>
                );
              })}
            </div>
            <div className="flex">
              <LocationIcon params={"mr-2 text-gray-500"} />
              <p className="mb-1">{place.name}</p>
            </div>
            <div className="flex">
              <TimerIcon params={"mr-2 text-gray-500"} />
              <p className="mb-2">
                {startTime}
                {endTime ? ` - ${endTime}` : null}
              </p>
            </div>
            <hr />
            <div className="md:whitespace-normal mt-2 mb-8" id="description">
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
                  <p
                    className="text-gray-700"
                    key={`${deal._id}-${deal}-${index}`}
                  >
                    ∙{deal}
                  </p>
                )
              )}
            </div>
          </div>
        </Link>
        <div className="fixed flex bottom-0 right-4 mb-4">
          {" "}
          {/* should be flex when reporting is implemented */}
          <CautionIcon params={"text-red-400 mr-1 pt-1"} />
          <button
            className="text-red-400 z-20"
            onClick={() => {
              setShowReportModal(true);
            }}
          >
            Report this deal
          </button>
        </div>
      </div>
    </div>
  );
};
