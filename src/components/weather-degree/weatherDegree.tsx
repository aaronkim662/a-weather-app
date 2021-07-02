import React, { ButtonHTMLAttributes } from 'react';
import './weatherDegree.sass';

interface DegreeProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  degree: string;
  setDegree: any;
}

const WeatherDegree: React.FC<DegreeProps> = (props) => {
  return <div id = 'degree-container'>
    <button
      className = 'degree-button'
      value = {props.degree}
      onClick = {() => props.setDegree('c')}
    >&deg;C</button>
    <button
      className = 'degree-button'
      value = {props.degree}
      onClick = {() => props.setDegree('f')}
    >&deg;F</button>
  </div>
}

export default WeatherDegree;