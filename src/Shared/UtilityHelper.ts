import { IWeather } from "../Interfaces/IWeather";
import { IWeatherDailyDetail } from "../Interfaces/IWeatherDailyDetail";

// check if object is empty or having keys+
export const isEmpty = (obj: any) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};

export const mapper = (weatherData: any) => ({
  sunrise: weatherData?.sunrise,
  sunset: weatherData?.sunset,
  temp: weatherData?.temp,
  humidity: weatherData?.humidity,
  clouds: weatherData?.clouds,
  wind_speed: weatherData?.wind_speed,
  weather: weatherData?.weather?.map((weather: any) => ({
    main: weather?.main,
    description: weather?.description,
  })),
});

// map the current weather data and return the mapped object
export const mapCurrentData = (current: any) => mapper(current);

// map the daily weather data and return the mapped object
export const mapDailyData = (daily: any) => {
  const dailyData:Array<IWeatherDailyDetail>=[];
  daily.forEach((data:any) => {
    dailyData.push(mapper(data));
  });
 return dailyData;
}

// mapped the weather report data as defined schema and return the object
export const bindWeatherData = (weatherData: any) => {
  if (isEmpty(weatherData)) {
    return {};
  }
  const weatherDetail: IWeather = {
    current: mapCurrentData(weatherData?.current),
    daily: mapDailyData(weatherData?.daily),
  };
  return weatherDetail;
};
