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
import NoResultFound from '../components/NoResultFound'

const ApiServices = makeApiServices();
const { serverService } = ApiServices;

const Dashbord = () => {
  const [seconds, setSeconds] = useState(0)
  const [machine, setMachine] = useState({
    username: "",
    ip_address: "",
    password: "",
  });
  const [ipAddress, setIpAddress] = useState("");
  const [isMachine, setIsMachine] = useState(false);

  useEffect(() => {
    const tempMachine = JSON.parse(localStorage.getItem("currentMachine"));
    if (tempMachine.hasOwnProperty("isDifferent")) {
      setIsMachine(false);
    } else {
      setIsMachine(true);
      setMachine(tempMachine);
    }
  }, []);
  useEffect(() => {
    const getIpAddress = async () => {
      let myMachine = JSON.parse(localStorage.getItem("currentMachine"));
      try {
        const { data } = await serverService.getNetInfo(myMachine);
        if (data) {
          setIpAddress(data["ip address"]);
        }
      } catch (error) {
        console.log(error.response, error.message);
      }
    };
    getIpAddress();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='page '>
      {seconds > 60 && !ipAddress ?
      <div className='empty'>
       <NoResultFound /> 
       <div>
       <button
      type='submit'
      className='btn btn-block  btn-primary '
      onClick={() => {setSeconds(0)}}
    >
      Try again
    </button>
    </div>
       </div>
       :
      <div>
      <PageHeader
        title={
          isMachine
            ? `For ${machine.username}, The IP address is ${ipAddress}`
            : "Global Dashbord"
        }
      />
      <div className=''>
        <CPULogs />
      </div>
      <div className='page-single'>
        <div className='row row-cards row-deck'>
          <div className='col col-md-6 mx-auto'>
            <RAM machine={machine} />
          </div>
          <div className='col col-md-6 mx-auto'>
            <HD />
          </div>
        </div>
      </div>
      </div>
      }
    </div>
  );
};

export default Dashbord;
