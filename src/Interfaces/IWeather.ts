import { IWeatherCurrentDetail } from "./IWeatherCurrentDetail";
import { IWeatherDailyDetail } from "./IWeatherDailyDetail";

export interface IWeather{
    current:IWeatherCurrentDetail,
    daily:Array<IWeatherDailyDetail>
}