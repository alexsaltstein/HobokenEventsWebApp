import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";

export const ApproveEvent = ({ eventId }) => {
  const [user] = useUserState();
  const onClick = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/deal/judge/${eventId}`,
        { isApprove: true },
        {
          headers: {
            Authorization: `${user.token}`,
          },
        }
      );
      console.log("successfully approved event", eventId);
    } catch (e) {
      console.error("Error accepting event", e);
    }
  };
  return (
    <button
      onClick={onClick}
      className="p-2 font-bold text-white text-xl bg-green-400 active:bg-green-600 rounded-lg drop-shadow-md"
    >
      ✓
    </button>
  );
};
