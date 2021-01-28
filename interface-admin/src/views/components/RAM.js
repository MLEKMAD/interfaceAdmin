import React, {
  useEffect,
  useRef,
  useContext,
  useState,
  Fragment,
} from "react";
import Chartjs from "chart.js";
import PageHeader from "./PageHeader";
import makeApiServices from "../../api/ApiServices";

import "chartjs-plugin-streaming";
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


const RAM = () => {

  
  const history = useHistory();
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  // This function will be async and it will call the backend for data
  // then push the data here
  const onRefresh = async (chart) => {
    const machine = JSON.parse(localStorage.getItem("currentMachine"));
    try {
      const { data } = await serverService.getRamInfo(machine);
      if (data) {
        chart.config.data.datasets.forEach((dataset, index) => {
          index === 0
            ? dataset.data.push({
                x: Date.now(),
                y: data["total memory"],
              })
            : dataset.data.push({
                x: Date.now(),
                y: data["used memory"],
              });
        });
      }
    } catch (error) {
      console.log(error.config, error.message);
    }
  };
  
  const chartConfig = {
    type: "line",
    data: {
      datasets: [
        {
          label: "Total Memory",
          borderColor: chartColors.red,
          fill: false,
          cubicInterpolationMode: "monotone",
          data: [],
        },
        {
          label: "Used Memory",
          borderColor: chartColors.blue,
          fill: false,
          cubicInterpolationMode: "monotone",
          data: [],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Memory",
      },
      scales: {
        xAxes: [
          {
            type: "realtime",
            realtime: {
              duration: 200000,
              refresh: 10000,
              delay: 20000,
              onRefresh: onRefresh,
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "value",
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      tooltips: {
        mode: "nearest",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: false,
      },
    },
  };

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  const onButtonClick = () => {
    const data = [];
    updateDataset(0, data);
  };

  return (
    <Fragment>
      <div className='card'>
        <canvas ref={chartContainer} />
      </div>
    </Fragment>
  );
};

export default RAM;
