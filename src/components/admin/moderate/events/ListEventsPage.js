import axios from "axios";
import React from "react";
import { logout } from "../../../../utils/admin";
import { useUserState } from "../../../../utils/userState";

export const ListEventsPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [user, setUser] = useUserState();

  const [data, setData] = React.useState();

  const fetchData = React.useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/user/test`, {
        headers: {
          "x-access-token": user.token,
        },
      });
      setData(res.data);
    } catch (e) {
      logout(setUser);
      console.log(e);
    }
  }, [setData, API_URL, setUser, user]);

  React.useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [fetchData]);

  return (
    <div>
      <p>Hi, {user.firstName}</p>
      <p>list of events that need to be approved or denied</p>
      <p>{data}</p>
    </div>
  );
};
