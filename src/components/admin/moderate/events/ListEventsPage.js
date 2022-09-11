import axios from "axios";
import React from "react";
import { logout } from "../../../../utils/admin";
import { useUserState } from "../../../../utils/userState";
import { ApproveEvent } from "./ApproveEvent";
import { DenyEvent } from "./DenyEvent";

export const ListEventsPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [user, setUser] = useUserState();

  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const fetchData = React.useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/deal?approved=false`, {
        headers: {
          "x-access-token": user.token,
        },
      });
      setData(res.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      logout(setUser);
      console.log(e);
    }
  }, [setData, API_URL, setUser, user]);

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
