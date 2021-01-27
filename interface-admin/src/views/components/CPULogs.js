import React, { Fragment, useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import 'chartjs-plugin-streaming';
import makeApiServices from "../../api/ApiServices";


const ApiServices = makeApiServices();
const {serverService} = ApiServices;

const chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};




const CPULogs = () => {
	
	


// This function will be async and it will call the backend for data
// then push the data here 
const onRefresh = async (chart) => {
	const machine = JSON.parse(localStorage.getItem("currentMachine"));
	const response = await serverService.getCpuInfo(machine);
		if (response.data) {
			const data = response.data
			console.log("CPU:",data)
			chart.config.data.datasets.forEach((dataset,index) => {
				index === 0 ? 
				dataset.data.push({
				  x: Date.now(),
				  y: 4
				})
				:
				dataset.data.push({
				  x: Date.now(),
				  y: 2
				})
			  });
		}
		
	
}


const chartConfig = {
  type: 'line',
	data: {
		datasets: [{
			label: 'CPU',
			borderColor: chartColors.red,
			fill: false,
			cubicInterpolationMode: 'monotone',
			data: []
		}, {
			label: 'performance',
			borderColor: chartColors.blue,
			fill: false,
			cubicInterpolationMode: 'monotone',
			data: []
		}]
	},
	options: {
		title: {
			display: true,
			text: 'CPU'
		},
		scales: {
			xAxes: [{
				type: 'realtime',
				realtime: {
					duration: 200000,
					refresh: 10000,
					delay: 20000,
					onRefresh: onRefresh
				}
			}],
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'value'
				},
				ticks: {
					beginAtZero: true
				}
			}]
		},
		tooltips: {
			mode: 'nearest',
			intersect: false
		},
		hover: {
			mode: 'nearest',
			intersect: false
		}
	}
};
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  // const updateDataset = (datasetIndex, newData) => {
  //   chartInstance.data.datasets[datasetIndex].data = newData;
  //   chartInstance.update();
  // };

 

  return (
    <Fragment>
    <div className="card">
      <canvas ref={chartContainer} />
    </div>
    </Fragment>
  );
};

export default CPULogs;
