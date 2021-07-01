import './weatherApp.sass';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import WeatherInput from './components/weather-input/weatherInput';
import WeatherIcon from './components/weather-icon/weatherIcon';
import { useState } from 'react';

const WeatherApp: React.FC = () => {

  const [location, setLocation] = useState('')

  const { SearchWeather } = useActions();

  const { data, error, loading } = useTypedSelector((state) => state.weather); // eslint-disable-line

  const getWeather = async (e: any) => {
    e.preventDefault()
    SearchWeather(location)
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
      </div>
  )
}

export default WeatherApp;
