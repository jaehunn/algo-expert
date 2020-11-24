// row 들이 어떻게 정렬되어있는지 확인해야한다. 같은 col 의 row 들이 정렬되어있다.
// 즉, 특정 점에서 row 를 바꿨을때 이전값들은 볼 필요가 없다는 뜻이다.

// 핵심은 row 와 col 이 특정 한 점으로 수렴하는 방식으로 target 을 찾아야한다는 것이다.
// 만약, row 와 col 이 같은 방향으로 증가하거나 감소하면
// 예를 들어 [0, 0] 에서 시작하면, target 과 비교해 row 를 증가할지 col 을 증가할지를 판단할 수가 없다.

// O(row + col) / O(1)
function searchInSortedMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col) {
    if (matrix[row][col] === target) return [row, col];

    if (matrix[row][col] > target) col -= 1;
    else row += 1;
  }

  return [-1, -1];
}
