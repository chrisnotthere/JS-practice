function arrayCheck(array){

  let sum = array.reduce((accum, curr) => accum + curr);
  let length = array.length;

  return object = {
    average: sum / length,
    min: Math.min(...array),
    max: Math.max(...array),
    length
  }
};

module.exports = arrayCheck;
