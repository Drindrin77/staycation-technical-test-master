import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:3001/"
};
const api = axios.create(axiosConfig);
export default api;
