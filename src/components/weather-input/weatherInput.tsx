import React, { InputHTMLAttributes } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './weatherInput.sass';

interface InputType extends InputHTMLAttributes<HTMLInputElement>{
  location: string;
  setLocation: any;
  getWeather: ( event: React.FormEvent<HTMLFormElement>) => void;
};

const WeatherInput: React.FC<InputType> = (props) => {

  const clearContent = () => {
    props.setLocation('');
  };

  return(
    <form id = 'weather-form' onSubmit = {(e) => props.getWeather(e)}>
      <FontAwesomeIcon
        id = 'weather-icon-search'
        className = 'weather-icon'
        icon = {faSearch}
      />
      <input
        id = 'weather-input'
        value = {props.location}
        placeholder = 'Enter a city'
        // autoComplete = 'off'
        onChange = {(e) => props.setLocation(e.target.value)}
      />
      {props.location.length > 0 ?
        <FontAwesomeIcon
          id = 'weather-icon-clear'
          className = 'weather-icon'
          icon = {faTimesCircle}
          onClick={clearContent}
        /> : <div className = 'clear-element'></div>
      }
    </form>
  )
}

export default WeatherInput;