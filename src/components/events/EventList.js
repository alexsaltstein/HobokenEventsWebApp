import React from "react";
import axios from "axios";
import { EventItem } from "./EventItem";

export const EventList = ({ title, url }) => {
  const [loading, setLoading] = React.useState(true);
  const [eventData, setEventData] = React.useState(null);

  const fetchData = React.useCallback(async () => {
    try {
      console.log(url);
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
    return <div>Loading...</div>;
  }

  if (!eventData || eventData.length === 0) {
    return <div>Error getting events</div>;
  }

  return (
    <div className="p-4">
      <h1 className="underline text-2xl">{title}</h1>
      {eventData.map((event, index) => (
        <>
          <EventItem key={`${title}-list-item-${index}`} eventData={event} />
          <hr />
        </>
      ))}
    </div>
  );
};
