import axios from "axios";

const axiosClients = axios.create({
  baseURL: "http://localhost:8080",
});

axiosClients.interceptors.request.use(async (config) => {
  let token = window.localStorage.getItem("token");
  config.headers = {
    authorization: token,
  };
  return config;
});

axiosClients.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClients;
