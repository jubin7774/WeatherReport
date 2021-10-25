import { IWeatherReport } from "./IWeatherReport";

export interface IWeatherCurrentDetail{
    sunrise:string,
    temp:string,
    humidity:string,
    clouds:string,
    weather:Array<IWeatherReport>
}