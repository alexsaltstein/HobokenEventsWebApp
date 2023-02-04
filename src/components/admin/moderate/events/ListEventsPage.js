import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";
import { EventItem } from "../../../events/EventItem";
import { Loading } from "../../../../utils/Loading";


export const ListEventsPage = () => {
  const [user] = useUserState();

  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const fetchData = React.useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/deal?approved.state=unapproved`,
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
    return <Loading loading={loading} />;
  }

  if (!data || data.length === 0) {
    return <p className="relative text-xl font-bold text-hoboken-blue left-8">No new events</p>;
  }
  return (
    <div className="mt-2 w-screen">
      <p className="relative text-xl font-bold text-hoboken-blue left-8">Hi, {user.firstName}</p>
      <p className="relative left-8 text-lg">Happs to be reviewed:</p>
      <div className="md:columns-2 md:gap-0 2xl:columns-3 w-screen lg:w-full md:px-4 h-full">
        {Array.isArray(data) ? data.map((event) => {
          return (
            <div
              key={event._id} 
              className="mx-4 py-4">
              <EventItem eventData={event} moderate/>
            </div>
          );
        }) : 
        <div
          key={data._id} 
          className="mx-4 py-4">
          <EventItem eventData={data} moderate/>
        </div>}
      </div>
    </div>
  );
};
