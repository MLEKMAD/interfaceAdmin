import axios from "axios";

import { makeStatisticsService } from "./services";

const makeApiServices = () => {
  const backendApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    statisticsService: makeStatisticsService(backendApi),
  };
};

export default makeApiServices;
