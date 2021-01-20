import React, { createContext, useReducer, useEffect, useState } from "react";
import makeApiServices from "../api/ApiServices";


const AppContext = createContext();

function AppProvider({ children }) {
  

  const ApiServices = makeApiServices();

  return (
    <AppContext.Provider
      value={{ ApiServices }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
