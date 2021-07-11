import './weatherDisplay.sass';
// import React from 'react';
import  *  as WI from 'react-icons/wi';

interface MainDescription {
  description : string
}

const WeatherDisplay: React.FC<MainDescription> = (props) => {

  const WeatherIcon = (desc: string) => {
    if (desc === 'Clouds') {
      return <WI.WiCloudy />
    }else if (desc === 'Thunderstorm') {
      return <WI.WiNightThunderstorm />
    }else if (desc === 'Mist') {
      return <WI.WiRaindrops />
    }else {
      return <WI.WiDaySunny />
    }

  }

  return <div className = 'weather-display-icon'>
    {WeatherIcon(props.description)}
  </div>
}

export default WeatherDisplay;