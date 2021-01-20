import React, { useContext } from "react";
import { Route as ReactRoute, Redirect } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Route = ({ component: Component }) => {

  return (
    <ReactRoute
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default Route;
