import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

  const isLoggedIn = !!localStorage.getItem("user");

  return isLoggedIn ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;



