import React, { Fragment, useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import "chartjs-plugin-streaming";
import makeApiServices from "../../api/ApiServices";
import { useHistory } from "react-router-dom";

const ApiServices = makeApiServices();
const { serverService } = ApiServices;

const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

const CPULogs = () => {
  const history = useHistory();
  const [cpuData, setCpuData] = useState();

  // This function will be async and it will call the backend for data
  // then push the data here
  const getData = async () => {
    let machine = JSON.parse(localStorage.getItem("currentMachine"));
    try {
      const response = await serverService.getCpuInfo(machine);
      if (response.data) {
        let data = [];

        data.push({
          item: "Architecture",
          value: response.data["Architecture"],
        });
        data.push({
          item: "CPU op-mode(s)",
          value: response.data["CPU op-mode(s)"],
        });
        data.push({ item: "CPU(s)", value: response.data["CPU(s)"] });
        data.push({ item: "Model name", value: response.data["Model name"] });
        setCpuData(data);
      }
    } catch (error) {
      console.log(Object.keys(error), error.message);
      
    }
  };


  useEffect(() => {
    getData();
  }, []);

  // const updateDataset = (datasetIndex, newData) => {
  //   chartInstance.data.datasets[datasetIndex].data = newData;
  //   chartInstance.update();
  // };

  return (
    <Fragment>
      <div className='card'>
        {cpuData &&
          cpuData.map((item, index) => (
            <div key={index} className='list-item '>
              <div className=''>
                <div className='card'>
                  {`${item["item"]}`} : {`${item["value"]}`}
                </div>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default CPULogs;
