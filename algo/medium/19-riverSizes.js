// 해당 노드를 거쳤는지 기록해야한다.
// 기록하게되면, 전체 노드를 순회하는 방식으로 짜더라도 continue guard 로 거를 수 있다.

// 기준노드로부터 상하좌우 노드를 유효한지 평가한다음 새로운 기준점으로 세팅한다. 이를 반복

// O(wh) / O (wh)
function riverSizes(matrix) {
  const sizes = []; // result
  const visited = matrix.map((row) => row.map(() => false)); // visited matrix

  // 1. 기준점 설정
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (visited[i][j]) continue; // guard

      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentSize = 0;
  const nodes = [[i, j]];

  while (nodes.length) {
    const currentNode = nodes.pop();

    i = currentNode[0];
    j = currentNode[1];

    // guard
    if (visited[i][j]) continue;
    visited[i][j] = true;

    if (matrix[i][j] === 0) continue;
    currentSize++;

    // 2. 기준점으로부터 상하좌우 노드 확인, 있다면 새로운 기준점으로 가지치기
    const unvisitedNodes = getUnvisitedNodes(i, j, matrix, visited);
    for (const node of unvisitedNodes) {
      nodes.push(node);
    }
  }

  // 최초 기준점에서 뻗어나간 사이즈를 결과 배열에 푸시
  if (currentSize > 0) sizes.push(currentSize);
}

function getUnvisitedNodes(i, j, matrix, visited) {
  const unvisitedNodes = [];

  // up down
  if (i > 0 && !visited[i - 1][j]) unvisitedNodes.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNodes.push([i + 1, j]);

  // left right
  if (j > 0 && !visited[i][j - 1]) unvisitedNodes.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNodes.push([i][j + 1]);

  return unvisitedNodes;
}
