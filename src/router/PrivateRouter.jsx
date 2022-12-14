import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div>{user.login ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
