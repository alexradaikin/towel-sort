
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined) {
        return [];
    }
    var arrRes = [];
    for(var i = 0; i < matrix.length; i++) {
      if(i % 2 === 0) {
        for(var j = 0; j < matrix[i].length; j += 1) {
            arrRes.push(matrix[i][j]);
        }
      } else {
        for(var k = matrix[i].length - 1; k >= 0; k--) {
            arrRes.push(matrix[i][k]);
        }
      }
    }
    return arrRes;
  };
