import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";

export const ApproveEvent = ({ eventId }) => {
  const [user] = useUserState();
  const onClick = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/deal/judge/${eventId}`,
        { isApprove: true },
        {
          headers: {
            Authorization: `${user.token}`,
          },
        }
      );
      console.log("successfully approved event", eventId);
      window.location.reload()
    } catch (e) {
      console.error("Error accepting event", e);
    }
  };
  return (
    <button
      onClick={onClick}
      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4">
        Approve ✓
    </button>
  );
};
