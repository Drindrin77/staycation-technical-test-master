import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "",
};
const api = axios.create(axiosConfig);
export default api;
