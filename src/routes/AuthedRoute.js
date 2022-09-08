import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserState } from "../utils/userState";

export const AuthedRoute = ({ children }) => {
  const [user] = useUserState();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};
