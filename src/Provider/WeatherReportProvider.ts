import { weatherReportUrl } from "../Shared/ApiEndpoint";
import { httpClient } from "../Shared/AxiosClient";
import { bindWeatherData } from "../Shared/UtilityHelper";

export const getWeatherReport = async (latitude: string, longitude: string) => {
  const weatherReport: any = await httpClient(
    weatherReportUrl(latitude, longitude),
    "GET"
  );
  return bindWeatherData(weatherReport?.data);
};
