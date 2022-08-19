var rotate = function (matrix) {
  let n = matrix.length
  let m = n / 2
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n - i - 1; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }

  return matrix
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))