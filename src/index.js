
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (!Array.isArray(matrix) || matrix === undefined){
    return [];
  }
  let sorted = [];
  for (let i = 0; i < matrix.length; i++) {
      if (matrix.indexOf(matrix[i]) % 2 !== 0) {
          sorted.push(matrix[i].reverse());
      } else {
        sorted.push(matrix[i]);
      };
  };
  return sorted.reduce((res, el) => res.concat(el), []);
};

