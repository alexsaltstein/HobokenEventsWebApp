import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../utils/admin";
import { useUserState } from "../../utils/userState";

export const Logout = () => {
  const [, setUser] = useUserState();

  React.useEffect(() => {
    logout(setUser);
  }, [setUser]);

  return (
    <div>
      You have been logged out! <Link to="/login">Log back in?</Link>
    </div>
  );
};
