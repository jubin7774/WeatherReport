import { isEmpty, bindWeatherData } from "../../Shared/UtilityHelper";
import { mockedWeatherData } from "./mockData/mockData";

describe("UtilityHelper test cases", () => {
  test("Should returned the mapped current data", () => {
    const result:any=bindWeatherData(mockedWeatherData);
    expect(result).not.toBeUndefined();
    expect(result.current.sunrise).toBe(1635113924);
    expect(result.current.weather).toBeDefined();
  });
  test("Should returned the mapped daily data", () => {
    const result:any=bindWeatherData(mockedWeatherData);
    expect(result).not.toBeUndefined();
    expect(result.daily[0].sunset).toBe(1635153231);
    expect(result.daily[0].temp).toBeDefined();
  });
  test("Should returned the empty mapped data if response is null", () => {
    expect(bindWeatherData(null)).toEqual({});
  });
  test("Should returned the empty mapped data if response is undefined", () => {
    expect(bindWeatherData(undefined)).toEqual({});
  });
  test("Should returned the empty mapped data if response is empty object", () => {
    expect(bindWeatherData({})).toEqual({});
  });
  test("Should returned false if object is valid", () => {
    expect(isEmpty({ test: "test" })).toBeFalsy();
  });
  test("Should returned true if object is invalid", () => {
    expect(isEmpty({})).toBeTruthy();
  });
});
