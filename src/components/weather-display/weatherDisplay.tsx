import './weatherDisplay.sass';
// import React from 'react';
import  *  as WI from 'react-icons/wi';
import { useState } from 'react';

interface MainDescription {
  description : string
}

const WeatherDisplay: React.FC<MainDescription> = (props) => {

  const [icon, setIcon] = useState('');

  const WeatherIcon = (desc: string) => {
    if (desc === 'Clouds') {
      return <WI.WiCloudy />
    }else if (desc === 'Thunderstorm') {
      return <WI.WiNightThunderstorm />
    }else if (desc === 'Sunny') {
      return <WI.WiDaySunny />
    }else if (desc === 'Mist') {
      return <WI.WiRaindrops />
    }else {
      return <WI.WiDaySunny />
    }

  }
  // clouds
  // sunny
  // rain
  // clear
  return <div className = 'weather-display-icon'>
    {WeatherIcon(props.description)}
  </div>
}

export default WeatherDisplay;