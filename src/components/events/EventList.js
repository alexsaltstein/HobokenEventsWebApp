import React from "react";
import axios from "axios";
import { EventItem } from "./EventItem";
import { Loading } from "../../utils/Loading";

export const EventList = ({ url, menu, setNumResults, calendar }) => {
  const [loading, setLoading] = React.useState(true);
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
          <div className="relative xs:top-30 md:top-40 w-fit mx-auto px-4 text-input-label-gray text-center font-semibold text-xl min-h-full">
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
    <div className="flex">
      {menu}
      <div>
        {calendar}
        <div className="grid cols-1 md:block md:columns-2 md:gap-0 xl:columns-3 md:mx-4">
          {eventData.map((event, index) => (
            <div
              key={`list-item-${index}`}
              className="mb-4 overflow-y-hidden hover:drop-shadow-lg transition duration-200"
            >
              <EventItem key={`list-item-${index}`} eventData={event} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden border border-red-500 w-full"></div>
    </div>
  );
};
