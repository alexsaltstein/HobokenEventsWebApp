import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";

export const DenyEvent = ({ eventId }) => {
  const [user] = useUserState();
  const onClick = async () => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/deal/flip/${eventId}`,
        { approved: false },
        {
          headers: {
            "x-access-token": user.token,
          },
        }
      );
      console.log("successfully denied event", eventId);
    } catch (e) {
      console.error("Error denying event", e);
    }
  };
  return (
    <button
      onClick={onClick}
      className="p-2 font-bold text-white text-xl bg-red-400 active:bg-red-600 rounded-lg drop-shadow-md"
    >
      X
    </button>
  );
};
