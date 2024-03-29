import "twin.macro"
import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";
import { XIcon } from "../../../icons/Icons";
import { DeleteDeal } from "../../../../server/deal";


export const DenyEvent = ({ eventId }) => {
  const [user] = useUserState();
  const onClick = async () => {
    try {
      await DeleteDeal(eventId, user);
      console.log("successfully denied event", eventId);
      window.location.reload()
    } catch (e) {
      console.error("Error denying event", e);
    }
  };
  return (
    <button
      onClick={onClick}
      className="flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4"
    >
      Deny
      <XIcon tw="ml-2 h-6 w-6" />
    </button>
  );
};
