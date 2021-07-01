import React, { InputHTMLAttributes } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './weatherInput.sass';

interface InputType extends InputHTMLAttributes<HTMLInputElement>{
  location: string;
  getWeather: ( event: React.FormEvent<HTMLFormElement>) => void;
  setLocation: any;
};

const WeatherInput: React.FC<InputType> = (props) => {

  const clearContent = () => {
    props.setLocation('');
  };

  return(
    <form id = 'form-element' onSubmit = {(e) => props.getWeather(e)}>
      <FontAwesomeIcon
        id = 'search-weather-icon'
        icon = {faSearch}
      />
      <input
        value = {props.location}
        placeholder = 'Enter a city'
        onChange = {(e) => props.setLocation(e.target.value)}
      />
      {props.location.length > 0 ?
        <FontAwesomeIcon
          id = 'clear-content-icon'
          className = 'clear-element'
          icon = {faTimesCircle}
          onClick={clearContent}
        /> : <div className = 'clear-element'></div>
      }
    </form>
  )
}

export default WeatherInput;