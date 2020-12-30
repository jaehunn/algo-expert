/**
 * You're given a two-dimensional array (a matrix) of distinct integers and a target integer.
 * Each row in the matrix is sorted, and each column is also stored;
 * the matrix doesn't necessarily have the same height and width
 *
 * Write a function that returns an array of the row and column indices of the target integer if it's contained in the matrix, otherwise [-1, -1]
 */

type Position = [number, number];

// O(r + c) / O(1)
function searchInSortedMatrix(matrix: number[][], target: number): Position {
  let row = 0;
  let col = matrix[0].length - 1;

  // convergence
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return [row, col];

    if (matrix[row][col] > target) col -= 1;
    else row += 1;
  }

  return [-1, -1];
}
