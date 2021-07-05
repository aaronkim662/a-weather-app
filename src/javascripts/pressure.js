// 1 mb = .03 inches of mercury

export const setPressure = (bar, degree) => {
  if (degree === 'f') {
    return `${Math.round(bar * .03)} inch`;
  }else{
    return `${bar} mb`;
  };
};