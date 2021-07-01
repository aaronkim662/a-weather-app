import './App.css';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import WeatherInput from './components/weather-input/weatherInput';
import { useState } from 'react';

const WeatherApp: React.FC = () => {

  const [location, setLocation] = useState('')

  const { SearchWeather } = useActions();

  const { data, error, loading } = useTypedSelector((state) => state.weather);

  const getWeather = async (e: any) => {
    e.preventDefault()
    SearchWeather(location)
    console.log('here', data)
  };

  return (
      <div>
        <WeatherInput location=  {location} getWeather = {getWeather} setLocation ={setLocation}/>
      </div>
  )
}

export default WeatherApp;
