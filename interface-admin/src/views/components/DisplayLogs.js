/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  Fragment,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import CRUDTable from "../components/CRUDTable";
import PageHeader from "../components/PageHeader";
import { useHistory } from "react-router-dom";
import LogsHours from "./LogsHours";
import Logs from "./Logs";
import LogsConnections from "./LogsConnections";
import LogsPages from "./LogsPages";
import NoResultFound from "./NoResultFound";
import makeApiServices from "../../api/ApiServices";
const ApiServices = makeApiServices();
const { serverService } = ApiServices;
const DisplayLogs = () => {
  const [seconds, setSeconds] = useState(0);
  const [ipAddress, setIpAddress] = useState("");
  const [machine, setMachine] = useState({
    username: "",
    ip_address: "",
    password: "",
  });

  useEffect(() => {
    const tempMachine = JSON.parse(localStorage.getItem("currentMachine"));
    if (!tempMachine.hasOwnProperty("isDifferent")) {
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
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='page '>
      {seconds > 60 && !ipAddress ? (
        <div className='empty'>
          <NoResultFound />
          <div>
          <button
            type='submit'
            className='btn btn-block  btn-primary '
            onClick={() => {
              setSeconds(0);
            }}
          >
            Try again
          </button>
          </div>
        </div>
      ) : (
        <div>
          <PageHeader title={`For ${machine.username}, Voilà information gotten from the logs `} />
          <div className='page-single'>
            <div className='row row-cards row-deck'>
              <div className='col col-md-6 mx-auto'>
                <LogsHours />
              </div>
              <div className='col col-md-6 mx-auto'>
                <Logs />
              </div>
            </div>
          </div>
          <div className='row row-cards row-deck'>
            <div className='col col-md-6 mx-auto'>
              <LogsConnections />
            </div>
          </div>
          <LogsPages />
        </div>
      )}
    </div>
  );
};

export default DisplayLogs;
