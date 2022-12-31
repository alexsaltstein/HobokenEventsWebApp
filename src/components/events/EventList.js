import React from "react";
import axios from "axios";
import { EventItem } from "./EventItem";
import { Loading } from "../../utils/Loading";
import { ResponsiveGrid } from "../templates/ResponsiveGrid";

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
    <div className="relative p-4 ml-4">
      <ResponsiveGrid>
        {eventData.map((event, index) => (
          <EventItem key={`list-item-${index}`} eventData={event} />
        ))}
      </ResponsiveGrid>
    </div>
  );
};
