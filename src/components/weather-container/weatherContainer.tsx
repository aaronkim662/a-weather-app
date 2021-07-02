import './weatherContainer.sass';
import { setTemperature } from '../../math/setTemperature';
import LoadingContainer from '../loading-container/loadingContainer';
import ErrorContainer from '../error-container/errorContainer';

interface ContainerType {
  data: any;
  error: string | null;
  loading: boolean;
  degree: string;
}

const WeatherContainer: React.FC<ContainerType> = (props) => {
  // const data = store.getState();
  const temp = props.data[0].main;

  return <div id = 'weather-container'>
    <div id = 'main-temp'>{setTemperature(temp?.temp, props.degree)}&deg;</div>
    <div id = 'feels-like' className = 'temp-element'>Feels Like: {setTemperature(temp?.feels_like, props.degree)}&deg;</div>
    <div className = 'temp-element'>Feels Like: {setTemperature(temp?.feels_like, props.degree)}&deg;</div>
  </div>
}

export default WeatherContainer;