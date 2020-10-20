// 4x4
// +4 +3
// -3 -2
// +2 +1
// -1 -0
// end

// O(n) / O(n)
function spiralTraverse(array) {
  const result = [];

  let startRow = 0;
  let endRow = array.length - 1;

  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // +col
    for (let col = startCol; col <= endCol; col += 1) {
      result.push(array[startRow][col]);
    }

    // +row
    for (let row = startRow + 1; row <= endRow; row += 1) {
      result.push(array[row][endCol]);
    }

    // -col
    for (let col = endCol - 1; col >= startCol; col -= 1) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    // -row
    for (let row = endRow - 1; row > startRow; row -= 1) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }
  }

  startRow += 1;
  endRow -= 1;
  startCol += 1;
  endCol -= 1;

  return result;
}

// 패턴을 정의하고 최소 단위를 반복한다. (반복문 또는 재귀)
// 변수를 많이 정의하는 것을 두려워하지마라. 동작이 우선이다.
// 반복문의 증감은 나중에 진행된다. 주의!
// 처음부터 우아하게 풀려고 하지말 것

// O(n) / O(n)
function _spiralTraverse(array) {
  const result = [];

  _spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);

  return result;
}

function _spiralFill(array, startRow, endRow, startCol, endCol, result) {
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
