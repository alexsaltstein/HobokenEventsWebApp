import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";

export const AddEventPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [user, setUser] = useUserState();

  return (
    <div>
      <p>Hi, {user.firstName}</p>
      <p>add event form</p>
    </div>
  );
};
