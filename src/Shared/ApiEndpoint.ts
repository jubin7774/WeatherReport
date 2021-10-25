import { config } from "dotenv";
const environmentConfig: any = config();
const baseUrl = environmentConfig.parsed.WEATHER_API_BASE_URL;
const apiKey = environmentConfig.parsed.API_KEY;
export const weatherReportUrl = (latitude: string, longitude: string) =>
  `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
