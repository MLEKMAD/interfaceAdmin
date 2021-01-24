import axios from "axios";

import { makeServerServices } from "./services";

const API_URL = "http://localhost:5000"

const makeApiServices = () => {
  const backendApi = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });

  return {
    serverService: makeServerServices(backendApi),
  };
};

export default makeApiServices;
