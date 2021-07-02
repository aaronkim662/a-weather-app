import { ResponseType, SearchState } from '../action-types';

interface SearchWeatherAction {
  type: ResponseType.SEARCH_WEATHER;
}

interface SearchWeatherSuccessAction {
  type: ResponseType.SEARCH_WEATHER_SUCCESS;
  payload: SearchState[] | string;
}

interface SearchWeatherErrorAction {
  type: ResponseType.SEARCH_WEATHER_ERROR;
  payload: string;
}

export type Action =
  | SearchWeatherAction
  | SearchWeatherSuccessAction
  | SearchWeatherErrorAction