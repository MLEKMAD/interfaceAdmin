import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import {Pie} from 'react-chartjs-2';
import makeApiServices from "../../api/ApiServices";



const ApiServices = makeApiServices();
const {serverService} = ApiServices;

const HD = () => {
  const [data , setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(201, 203, 207)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(54, 162, 235)'
          
        ],
        hoverBackgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(201, 203, 207)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(54, 162, 235)'
        ],
        data: [],
      }
    ]
  })
  const convertToMega = (value) => {
    let intValue = 0 ;
    switch(value.charAt(value.length-1)){
      case "K":
        intValue = parseFloat(value) / 1024
      case "M":
        intValue = parseFloat(value) 
      case "G":
        intValue = parseFloat(value) * 1024
    }
    return intValue;
  }

  const getHardDriveInfo = useCallback(async (machine) =>{
      const response = await serverService.getHdInfo(machine)
      if(response.data){
        console.log('response', response.data)
        const tempData = data
         for(const item in response.data){
            tempData.labels.push(item)
            tempData.datasets[0]['data'].push(convertToMega(response.data[item]))
         }
         setData(tempData)
      }
  },[data])
 
useEffect(() => {
  const machine = JSON.parse(localStorage.getItem("currentMachine"));
  getHardDriveInfo(machine)
  console.log("PIE",data)
}, [data])
  // const updateDataset = (datasetIndex, newData) => {
  //   chartInstance.data.datasets[datasetIndex].data = newData;
  //   chartInstance.update();
  // };

 

  return (
    <Fragment>
       <div className="card">
         {data.datasets[0]['data'].length != 0 ? <Pie data={data}
          options={{
            title:{
              display:true,
              text:'Hard Drive Disks',
              fontSize:16
            },
            legend:{
              display:true,
              position:'right'
            }
          }} />: <h3>Loading...</h3> }
     
    </div>
    </Fragment>
  );
};

export default HD;
