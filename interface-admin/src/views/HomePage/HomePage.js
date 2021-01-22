import React, { useContext } from "react";

import image1 from "../../assets/images/illustrations/undraw_people_search.svg";
import image2 from "../../assets/images/illustrations/undraw_hire_te5y.svg";
import { Link } from "react-router-dom";
import {  SettingsIcon } from "../components/icons";
import { AppContext } from "../../context/AppContext";
import Dashbord from "../components/Dashbord";
import RAM from "../components/RAM";
import DateLogs from "../components/DateLogs";
import Logs from "../components/Logs";
import CPULogs from "../components/CPULogs";
import HD from "../components/HD";

const HomePage = () => {

  return (
    <div className="page">
    <div className="page-single">
      <div className="container">
      <Logs/>
      </div>
      </div>
      </div>
  );
};

export default HomePage;
