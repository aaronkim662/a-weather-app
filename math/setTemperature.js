import { conversion } from './conversion';
import { temperature } from './temperature';

export const setTemperature = (temp, degree) => {
  if (degree === 'c') {
    return temperature(temp)
  }else{
    return conversion(temperature(temp))
  }
};