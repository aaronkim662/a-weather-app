import './weatherDegree.sass';
import React, { ButtonHTMLAttributes } from 'react';

interface DegreeProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  degree: string;
  setDegree: any;
}

const WeatherDegree: React.FC<DegreeProps> = (props) => {

  const setDegreeFunction = (degree: string) => {
    degree === 'c' ? props.setDegree('f') : props.setDegree('c');
  };

  const addDegreeClass = (element:string) => {
    if (props.degree === element) {
      return 'active-degree'
    }
    return 'inactive-degree'
  };

  return <div id = 'degree-container' onClick = {() => setDegreeFunction(props.degree)}>
    <div className = {addDegreeClass('f')}>&deg;F</div>
    <div> | </div>
    <div className = {addDegreeClass('c')}>&deg;C</div>
  </div>
}

export default WeatherDegree;