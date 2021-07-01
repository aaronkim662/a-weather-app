import React, { InputHTMLAttributes } from 'react';
import './weatherInput.sass';

interface InputType extends InputHTMLAttributes<HTMLInputElement>{
  location: string;
  getWeather: ( event: React.FormEvent<HTMLFormElement>) => void;
  setLocation: any;
};

const WeatherInput: React.FC<InputType> = (props) => {
  return(
    <form id = 'form-element' onSubmit = {(e) => props.getWeather(e)}>
      <input value = {props.location} placeholder = 'Enter a city' onChange = {(e) => props.setLocation(e.target.value)}/>
    </form>
  )
}

export default WeatherInput;