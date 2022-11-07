import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";
import { ApproveEvent } from "./ApproveEvent";
import { DenyEvent } from "./DenyEvent";

export const ListEventsPage = () => {
  const [user] = useUserState();

  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const fetchData = React.useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/deal?approved=false`,
        {
          headers: {
            Authorization: `${user.token}`,
          },
        }
      );
      setData(res.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e, e.message);
    }
  }, [setData, user]);

  React.useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [fetchData]);

  if (loading) {
    return <p>loading</p>;
  }

  if (!data || data.length === 0) {
    return <p>No new events</p>;
  }
  return (
    <div>
      <p>Hi, {user.firstName}</p>
      <p>list of events that need to be approved or denied</p>

      <p>
        {data.map((event) => (
          <div className="m-2">
            <p>{event.description}</p>
            <p>eventid: {event._id}</p>
            <p>placeId: {event.placeId}</p>
            <p>approved: {`${event.approved}`}</p>
            <p>dayOfWeek: {event.dayOfWeek}</p>
            <p>deals:</p>
            {event.deals.map((deal) => (
              <p>-{deal}</p>
            ))}
            <div className="flex flex-row space-x-4 ">
              <ApproveEvent eventId={event._id} />
              <DenyEvent eventId={event._id} />
            </div>
          </div>
        ))}
      </p>
    </div>
  );
};
