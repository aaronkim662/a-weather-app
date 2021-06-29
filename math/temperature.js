export const temperature = (temp) => {
  const celsius = Math.round(Math.abs(273 - temp));
  return celsius
};