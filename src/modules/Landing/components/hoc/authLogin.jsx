import { Outlet } from "react-router-dom";
// import Home from "../pages/home";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const authLogin = ({ children }) => {
  const token = localStorage.getItem("access_token");
  const state = useSelector((state) => state.detail);
  if (!token) {
    alert("Login dulu yuk");
    return <Navigate to="/register" />;
    // return <Navigate to="/search" />;
  }
  return <>{children || <Outlet />}</>;
};

export default authLogin;
