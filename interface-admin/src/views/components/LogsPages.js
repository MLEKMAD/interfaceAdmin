import React, { Fragment, useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import "chartjs-plugin-streaming";
import makeApiServices from "../../api/ApiServices";
import CRUDTable from "./CRUDTable";
import { useHistory } from "react-router-dom";

const ApiServices = makeApiServices();
const { serverService } = ApiServices;


const CPULogs = () => {
  const history = useHistory();
const [dataTable,setDataTable] = useState({column:[],data:[]})

    const getData = async (machine) => {
        try {
          const response = await serverService.getLogs(machine);
          if (response.data) {
            let tempData = {column:[],data:[]};
            for (const item in response.data['logs_pages']) {
              tempData.column.push(item);
              tempData.data.push(response.data['logs_pages'][item][1]);
            }
            setDataTable(tempData)
            console.log('Table',tempData)
          }
        } catch (error) {
          console.log(Object.keys(error), error.message);
        }
      };

      
    useEffect(() => {
        const machine = JSON.parse(localStorage.getItem("currentMachine"));
        getData(machine);
      }, []);

  return (
    <Fragment>
     coming...
    </Fragment>
  );
};

export default CPULogs;
