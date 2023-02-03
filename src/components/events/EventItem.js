/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import { Link } from "react-router-dom";
import { displayDate, getDisplayTime } from "../../utils/common";
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
import { DayDisplay } from "./components/DayDisplay";
import { TagsDisplay } from "./components/TagsDisplay";

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
    tags,
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
      <div className="fold:max-w-[250px] xs:max-w-[70%] sm:max-w-none font-sans mx-4 mb-4 overflow-y-hidden drop-shadow-md transition duration-200 hover:shadow-lg">
        <div className="bg-white border p-4 h-full z-30">
          <Link to={`/place/${placeId}`}>
            <div>
              <div className="flex justify-between sm:flex-row flex-col-reverse sm:space-y-0">
                <div className="flex flex-wrap">
                  <p className="font-semibold opacity-75 text-2xl mr-2">
                    {place.name}
                  </p>
                  <RightArrowIcon tw="mt-1 h-5" />
                </div>
                <div className="sm:pl-4 pl-0 sm:mb-0 mb-1">
                  <DayDisplay availableDays={dayOfWeek} />
                </div>
              </div>
              <div className="flex">
                <p className="mb-1 text-base">{title}</p>
              </div>
              <TagsDisplay tags={tags} tw="mb-1" />
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
          <div className="flex justify-between sm:items-center sm:flex-row flex-col">
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
