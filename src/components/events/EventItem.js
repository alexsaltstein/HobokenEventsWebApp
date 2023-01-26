import "twin.macro";
import React from "react";
import { Link } from "react-router-dom";
import {
  abreviateDay,
  capitalizeFirstLetter,
  displayDate,
  getDayColors,
  getDisplayTime,
} from "../../utils/common";
import {
  CautionIcon,
  TimerIcon,
  RightArrowIcon,
  ExternalLinkIcon,
  CheckIcon,
} from "../icons/Icons";
import ReportModal from "./ReportModal";
import { ApproveEvent } from "../admin/moderate/events/ApproveEvent";
import { DenyEvent } from "../admin/moderate/events/DenyEvent";

export const EventItem = ({ eventData, moderate }) => {
  const [showReportModal, setShowReportModal] = React.useState(false);
  const {
    placeId,
    dayOfWeek,
    startTime,
    endTime,
    title,
    deals,
    place,
    updatedAt,
    _id,
  } = eventData;

  const reportData = {
    dealId: _id,
  };

  React.useEffect(() => {
    if (showReportModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showReportModal]);

  return (
    <>
      {showReportModal ? (
        <ReportModal
          shown={showReportModal}
          title={`Report ${title} by ${place.name}`}
          reportData={reportData}
          onDismiss={() => setShowReportModal(false)}
        />
      ) : null}
      <div className="font-sans mx-4 mb-4 overflow-y-hidden drop-shadow-md transition duration-200 hover:shadow-lg">
        <div className="bg-white border p-4 h-full z-30">
          <Link to={`/place/${placeId}`}>
            <div>
              <div className="flex">
                <p className="font-semibold opacity-75 text-2xl mr-3">
                  {place.name}
                </p>
                <RightArrowIcon tw="mt-1 h-6" />
              </div>
              <div className="flex">
                <p className="mb-1 text-base">{title}</p>
              </div>
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
                <TimerIcon tw="mr-2 h-6 text-gray-500" />
                <p className="mb-2">{getDisplayTime(startTime, endTime)}</p>
              </div>
              <hr />
              <div className="md:whitespace-normal mt-2 mb-8" id="description">
                {deals.map((deal, index) =>
                  deal.includes("https") ? (
                    <div
                      className="flex"
                      key={`${deal._id}-${deal}-${index}-wrapper`}
                    >
                      <ExternalLinkIcon
                        tw="mt-1 mr-2 text-gray-500 h-6"
                        key={`${deal._id}-${deal}-${index}-link-icon`}
                      />
                      <button key={`${deal._id}-${deal}-${index}`}>
                        <a
                          href={deal}
                          target="_blank"
                          rel="noreferrer"
                          key={`${deal._id}-${deal}-${index}-link`}
                        >
                          View Deal Menu
                        </a>
                      </button>
                    </div>
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
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <CheckIcon className="text-green-600" />
              <p className="text-gray-500 lg:text-sm">
                Verified: {displayDate(new Date(updatedAt))}
              </p>
            </div>
            {moderate ? null : (
              <div className="flex items-center">
                <CautionIcon tw="text-red-400 mr-1 h-4" />
                <button
                  className="text-gray-500 z-20 lg:text-sm"
                  onClick={() => {
                    setShowReportModal(true);
                  }}
                >
                  Report Deal
                </button>
              </div>
            )}
          </div>
          {moderate ? (
            <div className="flex flex-row space-x-4 justify-center items-center border-t">
              <p className="text-input-label-gray">Actions:</p>
              <ApproveEvent eventId={eventData._id} />
              <DenyEvent eventId={eventData._id} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
