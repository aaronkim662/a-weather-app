import './App.css';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import WeatherInput from './components/weather-input/weather-input';

const WeatherApp: React.FC = () => {

  // const [location, setLocation] = useState('')

  const { SearchWeather } = useActions();

  const { data, error, loading } = useTypedSelector((state) => state.weather);

  const getWeather = async () => {
    SearchWeather('seattle')
    console.log('here', data)
  };

  return (
      <div>
        Hello
        <button onClick = {getWeather}>Weather</button>
        <WeatherInput />
      </div>

  )
}

export default WeatherApp;
