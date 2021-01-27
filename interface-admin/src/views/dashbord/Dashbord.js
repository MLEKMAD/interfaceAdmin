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
import makeApiServices from "../../api/ApiServices";

const ApiServices = makeApiServices();
const {serverService} = ApiServices;

const Dashbord = () => {
const [machine,setMachine] = useState({username:"",ip_address:"",password:""});
const [ipAddress, setIpAddress] = useState("");
const [isMachine, setIsMachine] = useState(false);


useEffect(() => {
  const tempMachine = JSON.parse(localStorage.getItem("currentMachine"));
  if(tempMachine.hasOwnProperty('isDifferent')){
      setIsMachine(false)
  }
  else{
    setIsMachine(true);
    setMachine(tempMachine)
  }
 

}, [])
useEffect(()=> {
  const getIpAddress = async()=>{
  let myMachine = JSON.parse(localStorage.getItem("currentMachine"));
  try{
    const {data} =  await serverService.getNetInfo(myMachine);
    if(data){
      setIpAddress(data['ip address'])
    }
 }
 catch (error) {
  console.log(error.response, error.message); 
}
  }
  getIpAddress()
},[])
  return (
    <div className="page ">
      <PageHeader title={isMachine ? `Hello ${machine.username}, your IP address is ${ipAddress}`: "Global Dashbord" }/>
      <div className="" >
        <CPULogs/>
      </div>
    <div className="page-single">
      <div className="row row-cards row-deck">
      <div className="col col-md-6 mx-auto">
      <RAM machine={machine} />
      </div>
      <div className="col col-md-6 mx-auto">
      <HD />
      </div> 
      </div>
      <div className="row row-cards row-deck">
      <div className="col col-md-6 mx-auto">
        <Logs/>
      </div>
      <div className=" center col col-md-6 mx-auto">
      <DateLogs />
      </div>
      </div>
      </div>
      </div>
  );
};

export default Dashbord;
