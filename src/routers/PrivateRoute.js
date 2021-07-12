import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({
  isAuthenticated,
  component: Component,
  ...rest
}) {
  localStorage.setItem("lastPath", rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/Login" />
      }
    />
  );
}

PrivateRoute.protoType = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
