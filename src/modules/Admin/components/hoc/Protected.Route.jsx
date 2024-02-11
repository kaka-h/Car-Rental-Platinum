import React from "react";
import { Outlet,Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/admin/login"} />;
  }
  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
