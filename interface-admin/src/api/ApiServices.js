import axios from "axios";

import { makeServerServices } from "./services";

const API_URL = "http://192.168.43.198:5000/"

const makeApiServices = () => {
  const backendApi = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    serverService: makeServerServices(backendApi),
  };
};

export default makeApiServices;
