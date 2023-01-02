import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";

export const DenyEvent = ({ eventId }) => {
  const [user] = useUserState();
  const onClick = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/deal/judge/${eventId}`,
        { isApprove: false },
        {
          headers: {
            Authorization: `${user.token}`,
          },
        }
      );
      console.log("successfully denied event", eventId);
      window.location.reload()
    } catch (e) {
      console.error("Error denying event", e);
    }
  };
  return (
    <button
      onClick={onClick}
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4"
    >
      Deny X
    </button>
  );
};
