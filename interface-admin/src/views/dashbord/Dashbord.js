import React, { useEffect, useState } from "react";

// import image1 from "../../assets/images/illustrations/undraw_people_search.svg";
// import image2 from "../../assets/images/illustrations/undraw_hire_te5y.svg";
// import { Link } from "react-router-dom";
// import {  SettingsIcon } from "../components/icons";
// import { AppContext } from "../../context/AppContext";
// import Dashbord from "../components/Dashbord";
import RAM from "../components/RAM";
import DateLogs from "../components/DateLogs";
import Logs from "../components/Logs";
import CPULogs from "../components/CPULogs";
import HD from "../components/HD";
import PageHeader from "../components/PageHeader";

const Dashbord = () => {
const [machineName,setMachineName] = useState("");
const [cpuModel,setCpuModel] = useState("");
useEffect(() => {
  console.log(localStorage.getItem("currentMachine"))
  const name = localStorage.getItem("currentMachine");
  if(name != "null"){
    setMachineName(name)
  }
 
  setCpuModel('32-bit')
}, [machineName])
  return (
    <div className="page ">
      <PageHeader title={machineName ? `Hello ${machineName}, Your CPU model is ${cpuModel}`: "Global Dashbord" }/>
    <div className="page-single">
      <div className="row row-cards row-deck">
      <div className="col col-md-6 mx-auto">
      <RAM />
      </div>
      <div className="col col-md-6 mx-auto">
        <CPULogs/>
      </div>
     
      </div>
      <div className="row row-cards row-deck">
      <div className="col col-md-6 mx-auto">
      <HD />
      </div>
      <div className="col col-md-6 mx-auto">
        <Logs/>
      </div>
     
      </div>
      <div className="row row-cards row-deck">
      <div className=" center col col-md-6 mx-auto">
      <DateLogs />
      </div>
      
     
      </div>
      </div>
      </div>
  );
};

export default Dashbord;
