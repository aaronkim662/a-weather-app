// m/s to miles/hr
export const setWind = (speed, degree) => {
  if (degree === 'f') {
    return `${Math.round(speed * 2.237)} mph`;
  }else{
    return `${speed} meter/s`;
  };
};