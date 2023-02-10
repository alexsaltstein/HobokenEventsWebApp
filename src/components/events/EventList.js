import React from "react";
import axios from "axios";
import { EventItem } from "./EventItem";
import { Loading } from "../../utils/Loading";
import { BannerAd } from "../ads/BannerAd";
import { DEAL_QUERY_PARAM, EVENTS_BETWEEN_ADS } from "../../constants/common";
import { useScrollIntoView } from "../../utils/useScrollIntoView";
import { useSearchParams } from "react-router-dom";

export const EventList = ({ url, menu, setNumResults, calendar }) => {
  const [loading, setLoading] = React.useState(true);
  const [searchParams] = useSearchParams();
  const selectedDeal = searchParams.get(DEAL_QUERY_PARAM);
  const topElemRef = useScrollIntoView([selectedDeal, loading]);
  const [eventData, setEventData] = React.useState(null);
  const fetchData = React.useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      if (Array.isArray(res.data)) {
        setEventData(res.data);
      } else {
        setEventData([]);
      }
      setNumResults(res.data.length);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, [url]);

  React.useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="relative flex lg:-left-2 ">
        {menu}
        <div className="relative w-full">
          {calendar}
          <div className="flex xs:top-10 md:top-40 w-fit mr-24 text-input-label-gray font-semibold text-xl min-h-fit">
            <Loading loading={loading} />
          </div>
        </div>
      </div>
    );
  }

  if ((!eventData || eventData.length === 0) && !loading) {
    return (
      <div className="relative flex">
        {menu}
        <div className="w-full max-w-7xl">
          {calendar}
          <div className="relative xs:top-30 md:top-40 w-screen px-4 text-input-label-gray text-center font-semibold text-xl min-h-full">
            <p className="flex flex-row flex-wrap justify-center items-center  xs:mx-2 xs:mt-4">
              Looks like nothing is happening...
            </p>
            <p className="flex flex-row flex-wrap justify-center items-center">
              Check out another day by clicking the date above!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex w-screen">
      {menu}
      <div className="w-[80%] max-w-7xl">
        {calendar}
        <div className="relative md:columns-2 md:gap-0 2xl:columns-3 w-screen lg:w-full md:px-4">
          {eventData.map((event, index) => (
            <div
              key={`list-item-${index}`}
              className="mb-4 px-8 md:px-4 w-screen md:w-auto lg:w-96 xl:w-auto overflow-y-hidden"
              ref={selectedDeal === event._id ? topElemRef : null}
            >
              <EventItem key={`list-item-${index}`} eventData={event} />
              {index !== 0 && index % EVENTS_BETWEEN_ADS === 0 ? (
                <div className="flex max-h-6 mt-4 mx-4 lg:hidden overflow-hidden">
                  <div className="h-fit w-full m-4">
                    <BannerAd />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
