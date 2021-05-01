import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { loggedInUserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [logInUser, setLogInUser] = useContext(loggedInUserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        logInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
