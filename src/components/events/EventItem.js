/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  copyToClipboard,
  displayDate,
  getDisplayTime,
} from "../../utils/common";
import {
  CautionIcon,
  TimerIcon,
  ExternalLinkIcon,
  CheckIcon,
  ShareIcon,
  MapPinIcon,
} from "../icons/Icons";
import ReportModal from "./ReportModal";
import { ApproveEvent } from "../admin/moderate/events/ApproveEvent";
import { DenyEvent } from "../admin/moderate/events/DenyEvent";
import { DayDisplay } from "./components/DayDisplay";
import { TagsDisplay } from "./components/TagsDisplay";
import { DEAL_QUERY_PARAM } from "../../constants/common";

export const EventItem = ({ eventData, moderate }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedDeal = searchParams.get(DEAL_QUERY_PARAM);
  const [showReportModal, setShowReportModal] = React.useState(false);

  const {
    placeId,
    dayOfWeek,
    startTime,
    endTime,
    title,
    deals,
    place,
    verifiedAt,
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

  const placeData = place[0];
  return (
    <>
      {showReportModal ? (
        <ReportModal
          shown={showReportModal}
          title={`Report ${title} by ${placeData.name}`}
          reportData={reportData}
          onDismiss={() => setShowReportModal(false)}
        />
      ) : null}
      <div className="fold:max-sm:max-w-screen sm:max-w-none font-sans mb-4 overflow-y-hidden drop-shadow-md hover:drop-shadow-lg">
        <div
          className={`bg-white border p-4 h-full z-30 ${
            selectedDeal === _id ? "border-button-blue" : null
          }`}
        >
          <Link to={`/place/${placeId}`}>
            <div>
              <div className="flex justify-between sm:flex-row flex-col-reverse sm:space-y-0">
                <div className="flex flex-wrap flex-col">
                  <p className="font-semibold opacity-75 text-2xl mr-2">
                    {placeData.name}
                  </p>
                  <div className="flex">
                    <p className="mb-1 text-base">{title}</p>
                  </div>
                  <TagsDisplay tags={tags} tw="mb-1" />
                </div>
                <div className="flex flex-row-reverse md:flex-col justify-between md:justify-start sm:pl-4 pl-0 sm:mb-0 mb-1">
                  <div tw="flex justify-end mb-1 md:mt-1">
                    <div tw="text-sm flex items-center text-hoboken-blue">
                      <MapPinIcon tw="h-5" />
                      {placeData.address.city}
                    </div>
                  </div>
                  <DayDisplay availableDays={dayOfWeek} />
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <TimerIcon tw="mr-2 h-5 text-gray-500" />
                  <p>{getDisplayTime(startTime, endTime)}</p>
                </div>
                <button
                  className="flex items-center text-gray-500 z-40 lg:text-sm"
                  onClick={(event) => {
                    event.preventDefault();
                    const old = {};
                    searchParams.forEach((val, key) => {
                      old[key] = val;
                    });
                    old[DEAL_QUERY_PARAM] = _id;
                    setSearchParams(old);
                    const url = window.location.href;
                    copyToClipboard(url);
                  }}
                >
                  <ShareIcon tw="mr-1 h-5" />
                  Share
                </button>
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
                Verified: {displayDate(new Date(verifiedAt))}
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
