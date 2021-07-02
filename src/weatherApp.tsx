import './weatherApp.sass';
import { useState } from 'react';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import WeatherInput from './components/weather-input/weatherInput';
import WeatherIcon from './components/weather-icon/weatherIcon';
import WeatherDegree from './components/weather-degree/weatherDegree';
import WeatherContainer from './components/weather-container/weatherContainer';
import ErrorContainer from './components/error-container/errorContainer';
import LoadingContainer from './components/loading-container/loadingContainer';

const WeatherApp: React.FC = () => {

  const [location, setLocation] = useState('');

  const [degree, setDegree] = useState('c');

  const { SearchWeather } = useActions();

  const { data, loading, error } = useTypedSelector((state) => state.weather);

  const getWeather = async (e: any) => {
    e.preventDefault();
    SearchWeather(location);
  };

  return (
      <div>
        <div id = 'app-header'>
          <WeatherIcon />
          <WeatherInput
            location=  {location}
            getWeather = {getWeather}
            setLocation ={setLocation}/>
          <WeatherDegree
            degree = {degree}
            setDegree = {setDegree}
          />
        </div>
        {loading ? <LoadingContainer /> : null}
        {data.length && data === 'Error' && loading === false ? <ErrorContainer /> : null}
        {data.length > 0 && data[0] && loading === false ?
          <WeatherContainer
            data = {data}
            error = {error}
            loading = {loading}
            degree = {degree}
          /> : null
        }
      </div>
  )
}

export default WeatherApp;
