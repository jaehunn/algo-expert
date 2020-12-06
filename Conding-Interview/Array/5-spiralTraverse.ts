/**
 * Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m)
 * and returns a one-dimensional array of all the array's elements in spiral order.
 *
 * Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.
 */

// 우 -> 하 -> 좌 -> 상 4가지 동작이 한 패턴으로 움직인다.
// 한 패턴이 완성되면 전체 2차원 배열의 사이즈는 상하좌우로 1씩 줄어든다.

// O(n) / O(n)
function spiralTraverse(array: number[][]) {
  const result: number[] = [];

  let startRow = 0;
  let endRow = array.length - 1;

  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // right
    for (let col = startCol; col <= endCol; col += 1) {
      result.push(array[startRow][col]);
    }

    // down
    for (let row = startRow + 1; row <= endRow; row += 1) {
      result.push(array[row][endCol]);
    }

    // left
    for (let col = endCol - 1; col >= startCol; col -= 1) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    // up
    for (let row = endRow - 1; row > startRow; row -= 1) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }

    // 사이즈를 좁힌다
    startRow += 1;
    endRow -= 1;
    startCol += 1;
    endCol -= 1;
  }

  return result;
}

// O(n) / O(n)
function _spiralTraverse(array: number[][]) {
  const result = [];

  spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);

  return result;
}

function spiralFill(
  array: number[][],
  startRow: number,
  endRow: number,
  startCol: number,
  endCol: number,
  result: number[]
) {
  if (startRow > endRow || startCol > endCol) return;

  for (let col = startCol; col <= endCol; col += 1) {
    result.push(array[startRow][col]);
  }

  for (let row = startRow + 1; row <= endRow; row += 1) {
    result.push(array[row][endCol]);
  }

  for (let col = endCol - 1; col >= startCol; col -= 1) {
    if (startRow === endRow) break;
    result.push(array[endRow][col]);
  }

  for (let row = endRow - 1; row > startRow; row -= 1) {
    if (startCol === endCol) break;
    result.push(array[row][startCol]);
  }

  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);
}
