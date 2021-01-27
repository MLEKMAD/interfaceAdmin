import React from "react";
import { Route as ReactRoute } from "react-router-dom";
//import { AppContext } from "../context/AppContext";

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
