import "twin.macro"
import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";
import { CheckIcon } from "../../../icons/Icons";

export const ApproveEvent = ({ eventId }) => {
  const [user] = useUserState();
  const onClick = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/deal/edit/${eventId}`,
        { approved: {state: 'active', user: user} },
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
      className="flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4">
        Approve
        <CheckIcon tw="ml-2 h-6 w-6" />
    </button>
  );
};
