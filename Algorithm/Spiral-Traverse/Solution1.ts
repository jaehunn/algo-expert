// T: O(n), n is the total nubmer of elements in array
// S: O(n)

export function Solution1(array: number[][]) {
  const result: number[] = [];

  // cycle 마다 공간 축소하기
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  // traverse cycle: right -> down -> left -> up
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
      // check height
      if (startRow === endRow) break;

      result.push(array[endRow][col]);
    }

    // up
    for (let row = endRow - 1; row > startRow; row -= 1) {
      if (startCol === endCol) break;

      result.push(array[row][startCol]);
    }

    // 축소
    startRow += 1;
    endRow -= 1;
    startCol += 1;
    endCol -= 1;
  }

  return result;
}
