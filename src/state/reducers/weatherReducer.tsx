import { Action } from "../actions";
import { ResponseType, SearchState } from "../action-types";

interface WeatherState {
  loading: boolean;
  error: string | null;
  data: SearchState[]
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (
  state: WeatherState = initialState,
  action: Action | any
  ):WeatherState => {

  switch (action.type) {
    case ResponseType.SEARCH_WEATHER:
      return { loading: true, error: null, data: [] }
    case ResponseType.SEARCH_WEATHER_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ResponseType.SEARCH_WEATHER_ERROR:
      return { loading: false, error: action.payload, data: [] }

    default:
      return state;
  }
};

export default reducer;