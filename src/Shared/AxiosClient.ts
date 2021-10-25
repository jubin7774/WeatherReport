import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = "application/json, text/plain";
    config.headers["Content-type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const httpClient = async (
  url: string,
  requestMethod: string | any,
  data?: object | undefined,
  params?: object | undefined
) => {
  return axios({
    url,
    method: requestMethod,
    data,
    params
  });
};
