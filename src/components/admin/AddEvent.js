import axios from "axios";
import React from "react";
import { logout } from "../../utils/admin";
import { useAuthState } from "../../utils/authState";

export const AddEvent = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [auth, setAuth] = useAuthState();

  const [data, setData] = React.useState();

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/user/test`, {
        headers: {
          "x-access-token": auth,
        },
      });
      setData(res.data);
    } catch (e) {
      logout(setAuth);
      console.log(e);
    }
  };

  React.useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return (
    <div>
      <p>add form</p>
      <p>{data}</p>
    </div>
  );
};
