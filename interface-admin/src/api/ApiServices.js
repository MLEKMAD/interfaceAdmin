import axios from "axios";

import { makeServerServices } from "./services";

const API_URL = "http://localhost:3004/api/";

const makeApiServices = () => {
  const backendApi = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  return {
    serverService: makeServerServices(backendApi),
  };
};

export default makeApiServices;
