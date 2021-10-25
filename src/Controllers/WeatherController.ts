import { Router, Request, Response, NextFunction } from "express";
import { getWeatherReport } from "../Provider/WeatherReportProvider";
export const weatherRouter = Router();

weatherRouter.get(
  "/getReport/:latitude/:longitude",
  async (request: Request, response: Response, next: NextFunction) => {
    const latitude: string = request.params?.latitude;
    const longitude: string = request.params?.longitude;
    if (latitude && longitude) {
      const weatherData = await getWeatherReport(latitude, longitude);
      response.status(200).send(weatherData);
    } else {
      response.status(404).send("Longitude and Latitude is required to fetch the record");
    }
  }
);
