import './weatherContainer.sass';
import * as js from '../../javascripts';

interface ContainerType {
  data: any;
  error: string | null;
  loading: boolean;
  degree: string;
}

const WeatherContainer: React.FC<ContainerType> = (props) => {
  const temp = props.data[0]?.main;
  const description = props.data[0]?.description;

  return <div id = 'weather-container'>
    <div id = 'container-left'>
      <div id = 'weather-description'>
        <div>{description.name}</div>
        <div>
          <div className = {description.main_description}>Pic</div>
          <div id = 'high-low-temps'>{js.setTemperature(temp.temp_min, props.degree)}&deg;/ {js.setTemperature(temp.temp_max, props.degree)}&deg;</div>
        </div>
      </div>
      <div id = 'main-temp'>{js.setTemperature(temp?.temp, props.degree)}&deg;</div>
      <div>
        <div>{js.capitalize(description.inner_description)}</div>
      </div>
    </div>
    <div id = 'container-right'>
      <div id = 'feels-like' className = 'temp-element'>Feels Like: {js.setTemperature(temp?.feels_like, props.degree)}&deg;</div>
      <div className = 'temp-element'>Wind: {js.setWind(props.data[0].wind, props.degree)}</div>
      <div className = 'temp-element'>Pressure: {js.setPressure(temp.pressure, props.degree)}</div>
      <div className = 'temp-element'>Humidity: {temp.humidity}%</div>
    </div>
  </div>
}

export default WeatherContainer;