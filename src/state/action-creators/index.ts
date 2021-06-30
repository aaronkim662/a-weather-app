import axios from "axios";
import { Dispatch } from "redux";
import { ResponseType } from "../action-types";
import { Action } from "../actions";
import { store } from "..";

export const SearchWeather = (location: string) => {
  return async ( dispatch: Dispatch<Action>) => {
    dispatch({
      type: ResponseType.SEARCH_WEATHER
    });

    try {
      const localhost = 'http://localhost:4000/';

      const { data } = await axios.get(localhost + 'weather/' + location);

      const weather: any = [{
        description: {
          inner_description: data.weather[0].description,
          main_description: data.weather[0].main
        },
        main: {
          feels_like: data.main.feels_like,
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min
        }
      }]

      dispatch({
        type: ResponseType.SEARCH_WEATHER_SUCCESS,
        payload: weather
      })
      store.dispatch({
        type: ResponseType.SEARCH_WEATHER_ERROR,
        payload: weather,
       })

    }catch (err) {
      dispatch({
       type: ResponseType.SEARCH_WEATHER_ERROR,
       payload: [],
      })
      store.dispatch({
        type: ResponseType.SEARCH_WEATHER_ERROR,
        payload: [],
       })
    }
  }
}