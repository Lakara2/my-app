import React, { useContext } from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          {...rest}
          render={(props) =>
            isAuthenticated ? (
              <Element key={props.location.key} {...props} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoute;
