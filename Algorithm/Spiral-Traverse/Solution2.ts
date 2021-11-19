// T: O()
// S: O()

export function Solution2(array: number[][]) {
  const result: number[] = [];

  // recursive
  spiralTraverse(array, result, 0, array.length - 1, 0, array[0].length - 1);

  return result;
}

function spiralTraverse(
  array: number[][],
  result: number[],
  startRow: number,
  endRow: number,
  startCol: number,
  endCol: number
) {
  // out of range
  if (startRow > endRow || startCol > endCol) return;

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

  spiralTraverse(
    array,
    result,
    startRow + 1,
    endRow - 1,
    startCol + 1,
    endCol - 1
  );
}
