/**
 * Write a function that takes in an n x m two-dimensional array(that can be square-shpaed when n == m) and returns a one-dimensional array of all the array's elements in zigzag order.
 *
 * Zigzag order starts at the top left corner of the two-dimensional array, goes down by one element, and proceeds in a zigzag pattern all the way to the bottom right corner.
 */

// border: down or right

// wip
// O(n) / O(n)
function zigzagTraverse(array: number[][]) {
  const height = array.length - 1; // Row
  const width = array[0].length - 1; // Col
  const result = [];

  let row = 0;
  let col = 0;
  let goingDown = true;
  while (!isOutOfBounds(row, col, height, width)) {
    result.push(array[row][col]);

    // 'L'
    if (goingDown) {
      // 예외케이스 포함
      if (col === 0 || row === height) {
        goingDown = false;

        if (row === height) col += 1;
        else row += 1;
      } else {
        row += 1;
        col -= 1;
      }

      // 'ㄱ'
    } else {
      if (row === 0 || col === width) {
        goingDown = true;

        if (col === width) row += 1;
        else col += 1;
      } else {
        row -= 1;
        col += 1;
      }
    }
  }

  return result;
}

function isOutOfBounds(
  row: number,
  col: number,
  height: number,
  width: number
) {
  return row < 0 || row > height || col < 0 || col > width;
}
