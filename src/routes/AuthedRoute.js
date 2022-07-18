import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "../utils/authState";

export const AuthedRoute = ({ children }) => {
  const [auth] = useAuthState();
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
