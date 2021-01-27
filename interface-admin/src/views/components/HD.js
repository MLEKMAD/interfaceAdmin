import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Chartjs from "chart.js";

import makeApiServices from "../../api/ApiServices";

const ApiServices = makeApiServices();
const { serverService } = ApiServices;

const HD = () => {
  const chartConfig = {
    type: "pie",
    data: {
      labels: [],
      datasets: [
        {
          label: "# of Votes",
          data: [],
          backgroundColor: [
            "rgb(112, 149, 101)",
            "rgb(57, 242, 120)",
            "rgb(89, 123, 184)",
            "rgb(89, 123, 184)",
            "rgb(89, 123, 184)",
            "rgb(229, 77, 84)",
            "rgb(143, 1, 46)",
            "rgb(144, 44, 43)",
            "rgb(227, 96, 133)",
            "rgb(23, 6, 43)",
          ],
          borderColor: [
            "rgb(112, 149, 101)",
            "rgb(57, 242, 120)",
            "rgb(89, 123, 184)",
            "rgb(89, 123, 184)",
            "rgb(89, 123, 184)",
            "rgb(229, 77, 84)",
            "rgb(143, 1, 46)",
            "rgb(144, 44, 43)",
            "rgb(227, 96, 133)",
            "rgb(23, 6, 43)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        labels: {},
      },
      title: {
        display: true,
        text: "Disk Distribution",
        fontSize: 25,
      },
    },
  };

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const convertToMega = (value) => {
    let intValue = 0;
    switch (value.charAt(value.length - 1)) {
      case "K":
        intValue = parseFloat(value) / 1024;
        break;
      case "M":
        intValue = parseFloat(value);
        break;
      case "G":
        intValue = parseFloat(value) * 1024;
    }
    console.log("intvalue", intValue);
    return intValue;
  };

  const setChart = async (machine) => {
    try {
      const response = await serverService.getHdInfo(machine);
      if (response.data) {
        let tempData = chartConfig.data;
        for (const item in response.data) {
          tempData.labels.push(item);
          tempData.datasets[0]["data"].push(convertToMega(response.data[item]));
        }
        updateDataset(0, tempData);
      }
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  useEffect(() => {
    const machine = JSON.parse(localStorage.getItem("currentMachine"));
    setChart(machine);
  }, [chartConfig]);
  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data = newData;
    chartInstance.update();
  };

  return (
    <Fragment>
      <div className='card'>
        <canvas ref={chartContainer} />
      </div>
    </Fragment>
  );
};

export default HD;
