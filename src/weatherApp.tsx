import './weatherApp.sass';
import { useActions } from './hooks/useActions';
import { useState } from 'react';
import { useTypedSelector } from './hooks/useTypedSelector';
import EmptyContainer from './components/empty-container/emptyContainer';
import LoadingContainer from './components/loading-container/loadingContainer';
import ErrorContainer from './components/error-container/errorContainer';
import WeatherContainer from './components/weather-container/weatherContainer';
import WeatherIcon from './components/weather-icon/weatherIcon';
import WeatherInput from './components/weather-input/weatherInput';

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
        </div>
        {!loading && data.length === 0 ? <EmptyContainer /> : null}
        {loading ? <LoadingContainer /> : null}
        {data.length && data === 'Error' && loading === false ? <ErrorContainer /> : null}
        {data.length > 0 && data !== 'Error' && loading === false ?
          <WeatherContainer
            data = {data}
            error = {error}
            loading = {loading}
            degree = {degree}
            setDegree = {setDegree}
          /> : null
        }
      </div>
  )
}

export default WeatherApp;
