import React, {
    Fragment,
    useCallback,
    useEffect,
    useRef,
    useState,
  } from "react";
  import Chartjs from "chart.js";
  
  import makeApiServices from "../../api/ApiServices";
import { useHistory } from "react-router-dom";
  
  const ApiServices = makeApiServices();
  const { serverService } = ApiServices;
  
  const LogsHours = () => {
    const history = useHistory();
    const chartConfig = {
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            label: "# of connection",
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
                'rgb(65, 41, 21)',
                'rgb(61, 41, 21)',
                'rgb(62, 46, 27)',
                'rgb(63, 46, 27)',
                'rgb(64, 46, 27)',
                'rgb(65, 46, 27)',
                'rgb(66, 46, 27)',
                'rgb(67, 80, 47)',
                'rgb(80, 46, 37)',
                'rgb(77, 26, 27)',
                'rgb(17, 46, 27)',
                'rgb(141, 46, 27)',
                'rgb(161, 46, 27)',
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
                'rgb(65, 41, 21)',
                'rgb(61, 41, 21)',
                'rgb(62, 46, 27)',
                'rgb(63, 46, 27)',
                'rgb(64, 46, 27)',
                'rgb(65, 46, 27)',
                'rgb(66, 46, 19)',
                'rgb(67, 80, 47)',
                'rgb(80, 46, 37)',
                'rgb(77, 26, 22)',
                'rgb(17, 46, 67)',
                'rgb(141, 46, 100)',
                'rgb(161, 46, 56)',
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
                'rgb(65, 41, 21)',
                'rgb(61, 41, 21)',
                'rgb(62, 46, 27)',
                'rgb(63, 46, 27)',
                'rgb(64, 46, 27)',
                'rgb(65, 46, 27)',
                'rgb(66, 46, 27)',
                'rgb(67, 80, 47)',
                'rgb(80, 46, 37)',
                'rgb(77, 26, 27)',
                'rgb(17, 46, 27)',
                'rgb(141, 46, 27)',
                'rgb(161, 46, 27)',
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
                'rgb(65, 41, 21)',
                'rgb(61, 41, 21)',
                'rgb(62, 46, 27)',
                'rgb(63, 46, 27)',
                'rgb(64, 46, 27)',
                'rgb(65, 46, 27)',
                'rgb(66, 46, 19)',
                'rgb(67, 80, 47)',
                'rgb(80, 46, 37)',
                'rgb(77, 26, 22)',
                'rgb(17, 46, 67)',
                'rgb(141, 46, 100)',
                'rgb(161, 46, 56)',
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
          text: "Number of connection per hour",
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
  
    
  
    const setChart = async (machine) => {
      try {
        const response = await serverService.getLogs(machine);
        if (response.data) {
            console.log(response.data)
          let tempData = chartConfig.data;
          for (const item in response.data['logs_hours']) {
            tempData.labels.push(item);
            tempData.datasets[0]["data"].push(response.data['logs_hours'][item]);
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
  
  export default LogsHours;
  