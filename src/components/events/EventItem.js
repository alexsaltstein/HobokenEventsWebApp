/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { displayDate, getDisplayTime } from "../../utils/common";
import {
  CautionIcon,
  TimerIcon,
  ExternalLinkIcon,
  CheckIcon,
} from "../icons/Icons";
import ReportModal from "./ReportModal";
import { ApproveEvent } from "../admin/moderate/events/ApproveEvent";
import { DenyEvent } from "../admin/moderate/events/DenyEvent";
import { DayDisplay } from "./components/DayDisplay";
import { TagsDisplay } from "./components/TagsDisplay";

const dealQueryParam = "deal_id";
export const EventItem = ({ eventData, moderate }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedDeal = searchParams.get(dealQueryParam);

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
      <div className="fold:max-sm:max-w-screen sm:max-w-none font-sans mb-4 overflow-y-hidden drop-shadow-md hover:drop-shadow-lg">
        <div
          className={`bg-white border p-4 h-full z-30 ${
            selectedDeal === _id ? "border-hoboken-blue" : null
          }`}
        >
          <Link to={`/place/${placeId}`}>
            <div>
              <div className="flex justify-between sm:flex-row flex-col-reverse sm:space-y-0">
                <div className="flex flex-wrap">
                  <p className="font-semibold opacity-75 text-2xl mr-2">
                    {place.name}
                  </p>
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
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                          className="text-hoboken-blue hover:text-button-blue underline text-xl"
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
            <button
              onClick={() => {
                const old = {};
                searchParams.forEach((val, key) => {
                  old[key] = val;
                });
                setSearchParams({
                  ...old,
                  [dealQueryParam]: _id,
                });
                const url = window.location.href;
                navigator.clipboard.writeText(url);

                // Alert the copied text
                alert("Copied the text: " + url);
              }}
            >
              share
            </button>
          </div>
          {moderate ? (
            <div className="flex flex-row space-x-4 justify-center items-center border-t mt-4">
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
