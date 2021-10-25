import { ITemperature } from "./ITemperature";
import { IWeatherReport } from "./IWeatherReport";

export interface IWeatherDailyDetail{
    sunrise:string,
    temp:ITemperature,
    humidity:string,
    clouds:string,
    weather:Array<IWeatherReport>
}