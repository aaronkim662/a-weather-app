export const capitalize = (sentence) => {
  return sentence = sentence.split(' ').map( (word, i) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ');
};