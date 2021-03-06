export enum ResponseType {
  SEARCH_WEATHER = 'search_weather',
  SEARCH_WEATHER_SUCCESS = 'search_weather_success',
  SEARCH_WEATHER_ERROR = 'search_weather_success'
}

type TempState = {
  feels_like: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  pressure: number;
}

type WeatherState = {
  name: string | null;
  inner_description: string | null;
  main_description: string | null;
}

type WindState = {
  wind: number;
}

export type SearchState = {
  description: WeatherState
  main: TempState;
  wind: WindState;
}