import React from "react";
import axios from "axios";
import { EventItem } from "./EventItem";
import { Loading } from "../../utils/Loading";
import { ResponsiveGridHP } from "../templates/ResponsiveGrid";
import { BannerAd } from "../ads/BannerAd";
import { VerticalBannerAd } from "../ads/VerticalBannerAd";
export const EventList = ({ url }) => {
  const [loading, setLoading] = React.useState(true);
  const [eventData, setEventData] = React.useState(null);

  const fetchData = React.useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setEventData(res.data);
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
    return <Loading loading={loading} />;
  }

  if ((!eventData || eventData.length === 0) && !loading) {
    return (
      <div className="relative xs:top-30 md:top-40 w-screen text-input-label-gray text-center font-semibold text-xl min-h-full">
        <p className="flex flex-row flex-wrap justify-center items-center  xs:mx-2 xs:mt-4">
          Looks like nothing is happening...
        </p>
        <p className="flex flex-row flex-wrap justify-center items-center">
          Check out another day by clicking the date above!
        </p>
      </div>
    );
  }

  return (
    <div className="relative p-4 lg:-left-2">
      <ResponsiveGridHP>
        <div className="hidden lg:flex max-w-full max-h-full">
          <VerticalBannerAd />
        </div>
        <div className="relative md:columns-2 w-full md:gap-0 xl:columns-3">
        {eventData.map((event, index) => (
          <div className="mx-4 mb-4 overflow-y-hidden hover:drop-shadow-lg transition duration-200  key={`list-item-${index}-wrapper`}">
            <EventItem key={`list-item-${index}`} eventData={event} />
          </div>
        ))}
        </div>
        <div className="hidden lg:flex max-w-full max-h-full">
          <VerticalBannerAd />
        </div>
      </ResponsiveGridHP>
    </div>
  );
};
